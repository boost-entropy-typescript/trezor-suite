export enum EventType {
    OnboardingCompleted = 'onboarding_completed',
    ScreenChange = 'screen_change',
    AppReady = 'app_ready',
    AssetsSync = 'assets_sync',
    WatchPortfolioTimeframeChange = 'watch_portfolio/timeframe_change',
    CreateReceiveAddress = 'create_receive_address',
    CreateReceiveAddressShowAddress = 'create_receive_address/show_address',
    ConfirmedReceiveAdress = 'receiveAddress/confirm_on_trezor',
    AssetDetail = 'asset_detail',
    AssetDetailTimeframeChange = 'asset_detail/timeframe_change',
    TransactionDetail = 'transaction_detail',
    TransactionDetailParameters = 'transaction_detail/parameters',
    TransactionDetailCompareValues = 'transaction_detail/compare_values',
    TransactionDetailInputOutput = 'transaction_detail/input_output',
    TransactionDetailExploreInBlockchain = 'transaction_detail/explore_in_blockchain',
    SettingsChangeCurrency = 'settings/change_currency',
    SettingsChangeTheme = 'settings/change_theme',
    SettingsChangeBtcUnit = 'settings/change_btc_unit',
    SettingsDiscreetToggle = 'settings/discreet_toggle',
    SettingsChangeCoinEnabled = 'settings/change_coin_enabled',
    BiometricsChange = 'biometrics_change',
    SettingsDataPermission = 'settings/data_permission',
    EmptyDashboardClick = 'empty_dashboard/action',
    DeviceManagerClick = 'switcher',
    EjectDeviceClick = 'eject_device/click',
    ConnectDevice = 'device_connect',
    UnsupportedDevice = 'unsupported_device',
    DiscoveryDuration = 'discovery_duration',
    CoinDiscovery = 'coin_discovery',
    CoinDiscoveryNewAccount = 'coin_discovery/new_account',
    ViewOnlyChange = 'view_only_change',
    ViewOnlySkipped = 'view_only_skipped',
    PassphraseMismatch = 'passphrase/mismatch',
    PassphraseTryAgain = 'passphrase/try_again',
    PassphraseDuplicate = 'passphrase/duplicate',
    PassphraseNotEnabled = 'passphrase/not_enabled',
    PassphraseArticleOpened = 'passphrase/article_opened',
    PassphraseEnterOnTrezor = 'passphrase/enter_on_trezor',
    PassphraseEnterInApp = 'passphrase/enter_in_app',
    PassphraseFlowFinished = 'passphrase/flow_finished',
    PassphraseAddHiddenWallet = 'passphrase/add_hidden_wallet',
    PassphraseExit = 'passphrase/exit',
    CoinEnablingInitState = 'coin-enabling/init_state',
    SendAddressFilled = 'send/address_filled',
    SendAmountInputSwitched = 'send/amount_input_switched',
    SendRecipientCountChanged = 'send/recipient_count_changed',
    SendFeeLevelChanged = 'send/fee_level_changed',
    SendTransactionDispatched = 'send/transaction_dispatched',
    SendFlowExited = 'send/flow_exited',
}
