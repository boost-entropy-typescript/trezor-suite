import { memo, ComponentType } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageName } from '@suite-common/suite-types';

import routes from 'src/constants/suite/routes';
import { Dashboard } from 'src/views/dashboard';
import Notification from 'src/views/suite/notifications';
import { Transactions } from 'src/views/wallet/transactions/Transactions';
import { Receive } from 'src/views/wallet/receive/Receive';
import WalletDetails from 'src/views/wallet/details';
import { Coins } from 'src/views/wallet/tokens/coins';
import { HiddenTokens } from 'src/views/wallet/tokens/hidden-tokens';
import WalletSend from 'src/views/wallet/send';
import { WalletStaking } from 'src/views/wallet/staking/WalletStaking';
import WalletSignVerify from 'src/views/wallet/sign-verify';
import WalletAnonymize from 'src/views/wallet/anonymize';
import WalletCoinmarketBuy from 'src/views/wallet/coinmarket/buy';
import WalletCoinmarketBuyDetail from 'src/views/wallet/coinmarket/buy/detail';
import WalletCoinmarketBuyOffers from 'src/views/wallet/coinmarket/buy/offers';
import WalletCoinmarketSell from 'src/views/wallet/coinmarket/sell';
import WalletCoinmarketSellDetail from 'src/views/wallet/coinmarket/sell/detail';
import WalletCoinmarketSellOffers from 'src/views/wallet/coinmarket/sell/offers';
import WalletCoinmarketExchange from 'src/views/wallet/coinmarket/exchange';
import WalletCoinmarketExchangeDetail from 'src/views/wallet/coinmarket/exchange/detail';
import WalletCoinmarketExchangeOffers from 'src/views/wallet/coinmarket/exchange/offers';
import WalletCoinmarketRedirect from 'src/views/wallet/coinmarket/redirect';
import { SettingsGeneral } from 'src/views/settings/SettingsGeneral/SettingsGeneral';
import { SettingsCoins } from 'src/views/settings/SettingsCoins/SettingsCoins';
import { SettingsDebug } from 'src/views/settings/SettingsDebug/SettingsDebug';
import { SettingsDevice } from 'src/views/settings/SettingsDevice/SettingsDevice';
import PasswordManager from 'src/views/password-manager';

const components: { [key: string]: ComponentType<any> } = {
    'suite-index': Dashboard,
    'notifications-index': Notification,

    'wallet-index': Transactions,
    'wallet-receive': Receive,
    'wallet-details': WalletDetails,
    'wallet-tokens-coins': Coins,
    'wallet-tokens-hidden': HiddenTokens,
    'wallet-send': WalletSend,
    'wallet-staking': WalletStaking,
    'wallet-sign-verify': WalletSignVerify,
    'wallet-anonymize': WalletAnonymize,

    'wallet-coinmarket-buy': WalletCoinmarketBuy,
    'wallet-coinmarket-buy-detail': WalletCoinmarketBuyDetail,
    'wallet-coinmarket-buy-offers': WalletCoinmarketBuyOffers,
    'wallet-coinmarket-sell': WalletCoinmarketSell,
    'wallet-coinmarket-sell-detail': WalletCoinmarketSellDetail,
    'wallet-coinmarket-sell-offers': WalletCoinmarketSellOffers,
    'wallet-coinmarket-exchange': WalletCoinmarketExchange,
    'wallet-coinmarket-exchange-detail': WalletCoinmarketExchangeDetail,
    'wallet-coinmarket-exchange-offers': WalletCoinmarketExchangeOffers,
    'wallet-coinmarket-redirect': WalletCoinmarketRedirect,

    'password-manager-index': PasswordManager,

    'settings-index': SettingsGeneral,
    'settings-coins': SettingsCoins,
    'settings-debug': SettingsDebug,
    'settings-device': SettingsDevice,
};

export const AppRouter = memo(() => (
    <Switch>
        {routes.map(route => (
            <Route
                key={route.name}
                path={process.env.ASSET_PREFIX + route.pattern}
                exact={route.exact}
                component={components[route.name as PageName]}
            />
        ))}
    </Switch>
));
