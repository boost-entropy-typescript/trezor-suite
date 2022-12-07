import { A, D, pipe } from '@mobily/ts-belt';
import BigNumber from 'bignumber.js';
import { fromUnixTime, getUnixTime } from 'date-fns';

import { FiatCurrencyCode } from '@suite-common/suite-config';
import { NetworkSymbol } from '@suite-common/wallet-config';
import { formatNetworkAmount } from '@suite-common/wallet-utils';
import { AccountBalanceHistory as AccountMovementHistory } from '@trezor/blockchain-link';
import TrezorConnect, { Success, Unsuccessful } from '@trezor/connect';

import { NUMBER_OF_POINTS } from './constants';
import {
    AccountHistoryBalancePoint,
    findOldestBalanceMovementTimestamp,
    getTimestampsInTimeFrame,
    mapCryptoBalanceMovementToFixedTimeFrame,
    mergeMultipleFiatBalanceHistories,
} from './graphUtils';
import { AccountItem, FiatGraphPoint, FiatGraphPointWithCryptoBalance } from './types';

export const addBalanceForAccountMovementHistory = (
    data: AccountMovementHistory[],
    symbol: NetworkSymbol,
): AccountHistoryBalancePoint[] => {
    let balance = '0';
    const historyWithBalance = data.map(dataPoint => {
        // subtract sentToSelf field as we don't want to include amounts received/sent to the same account
        const normalizedReceived = dataPoint.sentToSelf
            ? new BigNumber(dataPoint.received).minus(dataPoint.sentToSelf || 0).toFixed()
            : dataPoint.received;
        const normalizedSent = dataPoint.sentToSelf
            ? new BigNumber(dataPoint.sent).minus(dataPoint.sentToSelf || 0).toFixed()
            : dataPoint.sent;

        balance = new BigNumber(balance).plus(normalizedReceived).minus(normalizedSent).toFixed();

        return {
            time: dataPoint.time,
            cryptoBalance: formatNetworkAmount(balance, symbol),
        };
    });

    return historyWithBalance;
};

const accountBalanceHistoryCache: Record<string, AccountHistoryBalancePoint[]> = {};

export const getAccountBalanceHistory = async ({
    coin,
    descriptor,
    endOfTimeFrameDate,
}: {
    coin: NetworkSymbol;
    descriptor: string;
    endOfTimeFrameDate: Date;
}): Promise<AccountHistoryBalancePoint[]> => {
    const endTimeFrameTimestamp = getUnixTime(endOfTimeFrameDate);
    const cacheKey = `${coin}-${descriptor}-${endTimeFrameTimestamp}`;

    if (accountBalanceHistoryCache[cacheKey]) {
        return accountBalanceHistoryCache[cacheKey];
    }

    const accountMovementHistory = await TrezorConnect.blockchainGetAccountBalanceHistory({
        coin,
        descriptor,
        to: endTimeFrameTimestamp,
        // we don't need currencies at all here, this will just reduce transferred data size
        // TODO: doesn't work at all, fix it in connect or blockchain-link?
        currencies: ['usd'],
    });

    if (!accountMovementHistory?.success) {
        throw new Error(`Get account balance error: ${accountMovementHistory.payload.error}`);
    }

    const accountMovementHistoryWithBalance = addBalanceForAccountMovementHistory(
        accountMovementHistory.payload,
        coin,
    );

    accountBalanceHistoryCache[cacheKey] = accountMovementHistoryWithBalance;

    return accountMovementHistoryWithBalance;
};

type FiatRatesItem = {
    time: number;
    rates: {
        [key: string]: number | undefined;
    };
};

const fiatRatesCache: Record<string, FiatRatesItem[]> = {};

// consider to have this utility directly in connect
const isSuccessFiatResponse = <T>(res: Unsuccessful | Success<T>): res is Success<T> =>
    !!res.success;

export const getFiatRatesForNetworkInTimeFrame = async (
    timestamps: number[],
    networkSymbol: NetworkSymbol,
) => {
    const cacheKey = `${networkSymbol}-${JSON.stringify(timestamps)}`;

    if (fiatRatesCache[cacheKey]) {
        return fiatRatesCache[cacheKey];
    }

    const fiatRatesForDatesInRange = await TrezorConnect.blockchainGetFiatRatesForTimestamps({
        coin: networkSymbol,
        timestamps,
    }).then(res => {
        if (isSuccessFiatResponse(res)) {
            if (timestamps.length !== res.payload.tickers.length) {
                throw new Error(
                    `Get fiat rates error: number of returned rates doesn't match number of requested timestamps`,
                );
            }

            return res.payload.tickers.map(({ rates }, index) => ({
                // blockbook returns little bit different timestamps than we requested.
                // It's probably mapping to closes that is in his database, so we remap it back to requested timestamps.
                time: timestamps[index],
                rates,
            }));
        }
        throw new Error(`Get fiat rates error: ${res.payload.error}`);
    });

    fiatRatesCache[cacheKey] = fiatRatesForDatesInRange;

    return fiatRatesForDatesInRange;
};

export const getMultipleAccountBalanceHistoryWithFiat = async ({
    accounts,
    startOfTimeFrameDate,
    endOfTimeFrameDate,
    numberOfPoints = NUMBER_OF_POINTS,
    fiatCurrency,
}: {
    accounts: AccountItem[];
    startOfTimeFrameDate: Date | null;
    endOfTimeFrameDate: Date;
    numberOfPoints?: number;
    fiatCurrency: FiatCurrencyCode;
}) => {
    const accountsWithBalanceHistory = await Promise.all(
        accounts.map(({ coin, descriptor }) =>
            getAccountBalanceHistory({
                coin,
                descriptor,
                endOfTimeFrameDate,
            }).then(balanceHistory => ({
                coin,
                descriptor,
                balanceHistory,
            })),
        ),
    );

    if (!startOfTimeFrameDate) {
        // if startOfTimeFrameDate is not provided, it means we want to show all available data
        // so we need to find the oldest date balance movement in all accounts
        startOfTimeFrameDate = pipe(
            accountsWithBalanceHistory,
            findOldestBalanceMovementTimestamp,
            fromUnixTime,
        );
    }

    const timestamps = getTimestampsInTimeFrame(
        startOfTimeFrameDate,
        endOfTimeFrameDate,
        numberOfPoints,
    );

    const coins = pipe(
        accounts,
        A.map(({ coin }) => coin),
        A.uniq,
    );

    const coinsFiatRates = D.fromPairs(
        await Promise.all(
            coins.map(coin =>
                getFiatRatesForNetworkInTimeFrame(timestamps, coin).then(
                    res => [coin, res] as const,
                ),
            ),
        ),
    );

    if (A.length(accountsWithBalanceHistory) === 1) {
        // If there is only one account, we don't need to merge anything.
        // We can also keep cryptoBalance in points.
        const { coin, balanceHistory } = A.head(accountsWithBalanceHistory)!;
        return mapCryptoBalanceMovementToFixedTimeFrame({
            fiatRates: coinsFiatRates[coin],
            fiatCurrency,
            balanceHistory,
        }) as FiatGraphPointWithCryptoBalance[];
    }

    const accountsWithFiatBalanceHistory = A.map(
        accountsWithBalanceHistory,
        ({ coin, balanceHistory }) => {
            const coinFiatRates = coinsFiatRates[coin];
            return mapCryptoBalanceMovementToFixedTimeFrame({
                fiatRates: coinFiatRates,
                fiatCurrency,
                balanceHistory,
            });
        },
    );

    return mergeMultipleFiatBalanceHistories(accountsWithFiatBalanceHistory) as FiatGraphPoint[];
};
