import BigNumber from 'bignumber.js';
import { memoize } from 'proxy-memoize';

import { networks, NetworkSymbol } from '@suite-common/wallet-config';
import { selectAccounts, AccountsRootState } from '@suite-common/wallet-core';
import { selectCoinsLegacy, FiatRatesRootState } from '@suite-native/fiat-rates';
import { toFiatCurrency } from '@suite-common/wallet-utils';
import { selectFiatCurrencyCode, SettingsSliceRootState } from '@suite-native/module-settings';

type Assets = Partial<Record<NetworkSymbol, string[]>>;
type FormattedAssets = Partial<Record<NetworkSymbol, BigNumber>>;

export interface AssetType {
    symbol: NetworkSymbol;
    network: (typeof networks)[NetworkSymbol];
    assetBalance: BigNumber;
    fiatBalance: string;
}

type AssetsRootState = AccountsRootState & FiatRatesRootState & SettingsSliceRootState;

const sumBalance = (balances: string[]): BigNumber =>
    balances.reduce((prev, balance) => prev.plus(balance), new BigNumber(0));

export const selectBalancesPerNetwork = memoize((state: AssetsRootState): FormattedAssets => {
    const accounts = selectAccounts(state);
    const assets: Assets = {};
    accounts.forEach(account => {
        if (!assets[account.symbol]) {
            assets[account.symbol] = [];
        }
        assets[account.symbol]?.push(account.formattedBalance);
    });

    const formattedNetworkAssets: FormattedAssets = {};
    const assetKeys = Object.keys(assets) as NetworkSymbol[];
    assetKeys.forEach((asset: NetworkSymbol) => {
        const balances = assets[asset] ?? [];
        formattedNetworkAssets[asset] = sumBalance(balances);
    });

    return formattedNetworkAssets;
});

export const selectAssetsWithBalances = memoize((state: AssetsRootState) => {
    const balancesPerNetwork = selectBalancesPerNetwork(state);
    const networksWithAssets = Object.keys(balancesPerNetwork) as NetworkSymbol[];
    const coins = selectCoinsLegacy(state);

    const fiatCurrency = selectFiatCurrencyCode(state);

    return networksWithAssets
        .map((networkSymbol: NetworkSymbol) => {
            const network = networks[networkSymbol];

            const currentFiatRates = coins.find(
                f => f.symbol.toLowerCase() === networkSymbol.toLowerCase(),
            )?.current;

            // Note: This shouldn't be happening in a selector but rather in component itself.
            // In future, we will probably have something like `CryptoAmountToFiatFormatter` in component just using value sent from this selector.
            const fiatBalance =
                toFiatCurrency(
                    balancesPerNetwork[networkSymbol]?.toString() ?? '0',
                    fiatCurrency,
                    currentFiatRates?.rates,
                ) ?? '0';

            const asset: AssetType = {
                symbol: networkSymbol,
                network,
                assetBalance: balancesPerNetwork[networkSymbol] ?? new BigNumber(0),
                fiatBalance,
            };
            return asset;
        })
        .filter(data => data !== undefined) as AssetType[];
});
