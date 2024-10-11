import { DeviceModelInternal } from '@trezor/connect';

import { Networks } from './types';

export const networks = {
    btc: {
        symbol: 'btc',
        name: 'Bitcoin',
        networkType: 'bitcoin',
        bip43Path: "m/84'/0'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://btc1.trezor.io/tx/',
            account: 'https://btc1.trezor.io/xpub/',
            address: 'https://btc1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'amount-unit'],
        customBackends: ['blockbook', 'electrum'],
        accountTypes: {
            coinjoin: {
                accountType: 'coinjoin',
                bip43Path: "m/10025'/0'/i'/1'", // https://github.com/satoshilabs/slips/blob/master/slip-0025.md#public-key-derivation
                backendType: 'coinjoin', // use non-standard backend
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            taproot: {
                accountType: 'taproot',
                bip43Path: "m/86'/0'/i'",
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            segwit: {
                accountType: 'segwit',
                bip43Path: "m/49'/0'/i'",
            },
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/0'/i'",
            },
        },
        coingeckoId: 'bitcoin',
        coingeckoNativeId: 'bitcoin',
    },
    eth: {
        symbol: 'eth',
        name: 'Ethereum',
        networkType: 'ethereum',
        chainId: 1,
        bip43Path: "m/44'/60'/0'/0/i",
        decimals: 18,
        testnet: false,
        explorer: {
            tx: 'https://eth1.trezor.io/tx/',
            account: 'https://eth1.trezor.io/address/',
            nft: 'https://eth1.trezor.io/nft/',
            address: 'https://eth1.trezor.io/address/',
        },
        features: [
            'rbf',
            'sign-verify',
            'tokens',
            'coin-definitions',
            'nft-definitions',
            'staking',
        ],
        customBackends: ['blockbook'],
        accountTypes: {
            ledger: {
                // ledger (live), #1 acc is same as Trezor, so it is skipped
                accountType: 'ledger',
                bip43Path: "m/44'/60'/i'/0/0",
                isDebugOnlyAccountType: true,
            },
            legacy: {
                // ledger (legacy)
                accountType: 'legacy',
                bip43Path: "m/44'/60'/0'/i",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'ethereum',
        coingeckoNativeId: 'ethereum',
    },
    pol: {
        symbol: 'pol',
        name: 'Polygon PoS',
        networkType: 'ethereum',
        chainId: 137,
        bip43Path: "m/44'/60'/0'/0/i",
        decimals: 18,
        testnet: false,
        explorer: {
            tx: 'https://pol1.trezor.io/tx/',
            account: 'https://pol1.trezor.io/address/',
            nft: 'https://pol1.trezor.io/nft/',
            address: 'https://pol1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'tokens', 'coin-definitions', 'nft-definitions'],
        customBackends: ['blockbook'],
        accountTypes: {
            ledger: {
                // ledger (live), #1 acc is same as Trezor, so it is skipped
                accountType: 'ledger',
                bip43Path: "m/44'/60'/i'/0/0",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'polygon-pos',
        coingeckoNativeId: 'polygon-ecosystem-token',
    },
    bnb: {
        symbol: 'bnb',
        name: 'BNB Smart Chain',
        networkType: 'ethereum',
        chainId: 56,
        bip43Path: "m/44'/60'/0'/0/i",
        decimals: 18,
        testnet: false,
        explorer: {
            tx: 'https://bsc1.trezor.io/tx/',
            account: 'https://bsc1.trezor.io/address/',
            nft: 'https://bsc1.trezor.io/nft/',
            address: 'https://bsc1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'tokens', 'coin-definitions', 'nft-definitions'],
        customBackends: ['blockbook'],
        accountTypes: {
            ledger: {
                // ledger (live), #1 acc is same as Trezor, so it is skipped
                accountType: 'ledger',
                bip43Path: "m/44'/60'/i'/0/0",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'binance-smart-chain',
        coingeckoNativeId: 'binancecoin',
    },
    op: {
        symbol: 'op',
        name: 'Optimism',
        networkType: 'ethereum',
        chainId: 10,
        bip43Path: "m/44'/60'/0'/0/i",
        decimals: 18,
        testnet: false,
        explorer: {
            tx: 'https://op1.trezor.io/tx/',
            account: 'https://op1.trezor.io/address/',
            nft: 'https://op1.trezor.io/nft/',
            address: 'https://op1.trezor.io/address/',
            queryString: '',
        },
        features: ['rbf', 'sign-verify', 'tokens', 'coin-definitions', 'nft-definitions'],
        customBackends: ['blockbook'],
        accountTypes: {
            ledger: {
                // ledger (live), #1 acc is same as Trezor, so it is skipped
                accountType: 'ledger',
                bip43Path: "m/44'/60'/i'/0/0",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'optimistic-ethereum',
        coingeckoNativeId: 'ethereum',
    },
    sol: {
        symbol: 'sol',
        name: 'Solana',
        networkType: 'solana',
        bip43Path: "m/44'/501'/i'/0'", // phantom - bip44Change
        decimals: 9,
        testnet: false,
        features: ['tokens', 'coin-definitions' /*, 'staking' */],
        explorer: {
            tx: 'https://explorer.solana.com/tx/',
            account: 'https://explorer.solana.com/address/',
            address: 'https://explorer.solana.com/address/',
        },
        support: {
            [DeviceModelInternal.T2T1]: '2.6.4',
            [DeviceModelInternal.T2B1]: '2.6.4',
            [DeviceModelInternal.T3B1]: '2.8.1',
            [DeviceModelInternal.T3T1]: '2.7.1',
        },
        customBackends: ['solana'],
        accountTypes: {
            ledger: {
                // bip44Change - Ledger Live
                accountType: 'ledger',
                bip43Path: "m/44'/501'/i'",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'solana',
        coingeckoNativeId: 'solana',
    },
    ada: {
        // icarus derivation
        symbol: 'ada',
        name: 'Cardano',
        networkType: 'cardano',
        bip43Path: "m/1852'/1815'/i'",
        decimals: 6,
        testnet: false,
        features: ['tokens', 'staking', 'coin-definitions'],
        explorer: {
            tx: 'https://cexplorer.io/tx/',
            address: 'https://cexplorer.io/address/',
            account: 'https://cexplorer.io/address/',
            token: 'https://cexplorer.io/asset/',
        },
        support: {
            [DeviceModelInternal.T2T1]: '2.4.3',
            [DeviceModelInternal.T2B1]: '2.6.1',
            [DeviceModelInternal.T3B1]: '2.8.1',
            [DeviceModelInternal.T3T1]: '2.7.1',
        },
        customBackends: ['blockfrost'],
        accountTypes: {
            legacy: {
                // icarus-trezor derivation, differs from default just for 24 words seed
                accountType: 'legacy',
                bip43Path: "m/1852'/1815'/i'",
                isDebugOnlyAccountType: true,
            },
            ledger: {
                // ledger derivation
                accountType: 'ledger',
                bip43Path: "m/1852'/1815'/i'",
                isDebugOnlyAccountType: true,
            },
        },
        coingeckoId: 'cardano',
        coingeckoNativeId: 'cardano',
    },
    etc: {
        symbol: 'etc',
        name: 'Ethereum Classic',
        networkType: 'ethereum',
        chainId: 61,
        bip43Path: "m/44'/61'/0'/0/i",
        decimals: 18,
        testnet: false,
        explorer: {
            tx: 'https://etc1.trezor.io/tx/',
            account: 'https://etc1.trezor.io/address/',
            nft: 'https://etc1.trezor.io/nft/',
            address: 'https://etc1.trezor.io/address/',
        },
        features: ['sign-verify', 'tokens', 'coin-definitions'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'ethereum-classic',
        coingeckoNativeId: 'ethereum-classic',
    },
    xrp: {
        symbol: 'xrp',
        name: 'XRP',
        networkType: 'ripple',
        bip43Path: "m/44'/144'/i'/0/0",
        decimals: 6,
        testnet: false,
        explorer: {
            tx: 'https://xrpscan.com/tx/',
            account: 'https://xrpscan.com/account/',
            address: 'https://xrpscan.com/account/',
        },
        features: [],
        customBackends: [],
        accountTypes: {},
        coingeckoId: 'ripple',
        coingeckoNativeId: 'ripple',
    },
    ltc: {
        symbol: 'ltc',
        name: 'Litecoin',
        networkType: 'bitcoin',
        bip43Path: "m/84'/2'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://ltc1.trezor.io/tx/',
            account: 'https://ltc1.trezor.io/xpub/',
            address: 'https://ltc1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {
            segwit: {
                accountType: 'segwit',
                bip43Path: "m/49'/2'/i'",
            },
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/2'/i'",
            },
        },
        coingeckoId: 'litecoin',
        coingeckoNativeId: 'litecoin',
    },
    bch: {
        symbol: 'bch',
        name: 'Bitcoin Cash',
        networkType: 'bitcoin',
        bip43Path: "m/44'/145'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://bch1.trezor.io/tx/',
            account: 'https://bch1.trezor.io/xpub/',
            address: 'https://bch1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'bitcoin-cash',
        coingeckoNativeId: 'bitcoin-cash',
    },
    doge: {
        symbol: 'doge',
        name: 'Dogecoin',
        networkType: 'bitcoin',
        bip43Path: "m/44'/3'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://doge1.trezor.io/tx/',
            account: 'https://doge1.trezor.io/xpub/',
            address: 'https://doge1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'dogecoin',
        coingeckoNativeId: 'dogecoin',
    },
    zec: {
        symbol: 'zec',
        name: 'Zcash',
        networkType: 'bitcoin',
        bip43Path: "m/44'/133'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://zec1.trezor.io/tx/',
            account: 'https://zec1.trezor.io/xpub/',
            address: 'https://zec1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'zcash',
        coingeckoNativeId: 'zcash',
    },
    dash: {
        symbol: 'dash',
        name: 'Dash',
        networkType: 'bitcoin',
        bip43Path: "m/44'/5'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://dash1.trezor.io/tx/',
            account: 'https://dash1.trezor.io/xpub/',
            address: 'https://dash1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'dash',
        coingeckoNativeId: 'dash',
    },
    btg: {
        symbol: 'btg',
        name: 'Bitcoin Gold',
        networkType: 'bitcoin',
        bip43Path: "m/49'/156'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://btg1.trezor.io/tx/',
            account: 'https://btg1.trezor.io/xpub/',
            address: 'https://btg1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/156'/i'",
            },
        },
        coingeckoId: 'bitcoin-gold',
        coingeckoNativeId: 'bitcoin-gold',
    },
    dgb: {
        symbol: 'dgb',
        name: 'DigiByte',
        networkType: 'bitcoin',
        bip43Path: "m/49'/20'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://dgb1.trezor.io/tx/',
            account: 'https://dgb1.trezor.io/xpub/',
            address: 'https://dgb1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/20'/i'",
            },
        },
        coingeckoId: 'digibyte',
        coingeckoNativeId: 'digibyte',
    },
    nmc: {
        symbol: 'nmc',
        name: 'Namecoin',
        networkType: 'bitcoin',
        bip43Path: "m/44'/7'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://nmc1.trezor.io/tx/',
            account: 'https://nmc1.trezor.io/xpub/',
            address: 'https://nmc1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: 'namecoin',
        coingeckoNativeId: 'namecoin',
    },
    vtc: {
        symbol: 'vtc',
        name: 'Vertcoin',
        networkType: 'bitcoin',
        bip43Path: "m/84'/28'/i'",
        decimals: 8,
        testnet: false,
        explorer: {
            tx: 'https://vtc1.trezor.io/tx/',
            account: 'https://vtc1.trezor.io/xpub/',
            address: 'https://vtc1.trezor.io/address/',
        },
        features: ['sign-verify'],
        customBackends: ['blockbook'],
        accountTypes: {
            segwit: {
                accountType: 'segwit',
                bip43Path: "m/49'/28'/i'",
            },
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/28'/i'",
            },
        },
        coingeckoId: 'vertcoin',
        coingeckoNativeId: 'vertcoin',
    },
    // testnets
    test: {
        symbol: 'test',
        name: 'Bitcoin Testnet',
        networkType: 'bitcoin',
        bip43Path: "m/84'/1'/i'",
        decimals: 8,
        testnet: true,
        explorer: {
            tx: 'https://tbtc1.trezor.io/tx/',
            account: 'https://tbtc1.trezor.io/xpub/',
            address: 'https://tbtc1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'amount-unit'],
        customBackends: ['blockbook', 'electrum'],
        accountTypes: {
            coinjoin: {
                accountType: 'coinjoin',
                bip43Path: "m/10025'/1'/i'/1'", // https://github.com/satoshilabs/slips/blob/master/slip-0025.md#public-key-derivation
                backendType: 'coinjoin', // use non-standard backend
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            taproot: {
                accountType: 'taproot',
                bip43Path: "m/86'/1'/i'",
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            segwit: {
                accountType: 'segwit',
                bip43Path: "m/49'/1'/i'",
            },
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/1'/i'",
            },
        },
        coingeckoId: undefined,
        coingeckoNativeId: 'test-bitcoin', // fake, coingecko does not have testnets
    },
    regtest: {
        symbol: 'regtest',
        name: 'Bitcoin Regtest',
        networkType: 'bitcoin',
        bip43Path: "m/84'/1'/i'",
        decimals: 8,
        testnet: true,
        explorer: {
            tx: 'http://localhost:19121/tx/',
            account: 'http://localhost:19121/xpub/',
            address: 'http://localhost:19121/address/',
        },
        features: ['rbf', 'sign-verify', 'amount-unit'],
        customBackends: ['blockbook', 'electrum'],
        accountTypes: {
            coinjoin: {
                accountType: 'coinjoin',
                bip43Path: "m/10025'/1'/i'/1'", // https://github.com/satoshilabs/slips/blob/master/slip-0025.md#public-key-derivation
                backendType: 'coinjoin', // use non-standard backend
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            taproot: {
                accountType: 'taproot',
                bip43Path: "m/86'/1'/i'",
                features: ['rbf', 'amount-unit'], // no sign-verify
            },
            segwit: {
                accountType: 'segwit',
                bip43Path: "m/49'/1'/i'",
            },
            legacy: {
                accountType: 'legacy',
                bip43Path: "m/44'/1'/i'",
            },
        },
        isDebugOnlyNetwork: true,
        coingeckoId: undefined,
        coingeckoNativeId: undefined,
    },
    tsep: {
        symbol: 'tsep',
        name: 'Ethereum Sepolia',
        networkType: 'ethereum',
        bip43Path: "m/44'/1'/0'/0/i",
        chainId: 11155111,
        decimals: 18,
        testnet: true,
        explorer: {
            tx: 'https://sepolia1.trezor.io/tx/',
            account: 'https://sepolia1.trezor.io/address/',
            nft: 'https://sepolia1.trezor.io/nft/',
            address: 'https://sepolia1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'tokens'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: undefined,
        coingeckoNativeId: undefined,
    },
    thol: {
        symbol: 'thol',
        name: 'Ethereum Holesky',
        networkType: 'ethereum',
        bip43Path: "m/44'/1'/0'/0/i",
        chainId: 17000,
        decimals: 18,
        testnet: true,
        explorer: {
            tx: 'https://holesky1.trezor.io/tx/',
            account: 'https://holesky1.trezor.io/address/',
            nft: 'https://holesky1.trezor.io/nft/',
            address: 'https://holesky1.trezor.io/address/',
        },
        features: ['rbf', 'sign-verify', 'tokens', 'staking'],
        customBackends: ['blockbook'],
        accountTypes: {},
        coingeckoId: undefined,
        coingeckoNativeId: undefined,
    },
    dsol: {
        symbol: 'dsol',
        name: 'Solana Devnet',
        networkType: 'solana',
        bip43Path: "m/44'/501'/i'/0'",
        decimals: 9,
        testnet: true,
        features: ['tokens' /* , 'staking' */],
        explorer: {
            tx: 'https://explorer.solana.com/tx/',
            account: 'https://explorer.solana.com/address/',
            address: 'https://explorer.solana.com/address/',
            queryString: '?cluster=devnet',
        },
        support: {
            [DeviceModelInternal.T2T1]: '2.6.4',
            [DeviceModelInternal.T2B1]: '2.6.4',
            [DeviceModelInternal.T3B1]: '2.8.1',
            [DeviceModelInternal.T3T1]: '2.7.1',
        },
        customBackends: ['solana'],
        accountTypes: {},
        coingeckoId: undefined,
        coingeckoNativeId: 'test-ripple', // fake, coingecko does not have testnets
    },
    tada: {
        // icarus derivation
        symbol: 'tada',
        name: 'Cardano Testnet',
        networkType: 'cardano',
        bip43Path: "m/1852'/1815'/i'",
        decimals: 6,
        testnet: true,
        features: ['tokens', 'staking'],
        explorer: {
            tx: 'https://preview.cexplorer.io/tx/',
            address: 'https://preview.cexplorer.io/address/',
            account: 'https://preview.cexplorer.io/address/',
            token: 'https://preview.cexplorer.io/asset/',
        },
        support: {
            [DeviceModelInternal.T2T1]: '2.4.3',
            [DeviceModelInternal.T2B1]: '2.6.1',
            [DeviceModelInternal.T3B1]: '2.8.1',
            [DeviceModelInternal.T3T1]: '2.7.1',
        },
        customBackends: ['blockfrost'],
        accountTypes: {
            legacy: {
                // icarus-trezor derivation
                accountType: 'legacy',
                bip43Path: "m/1852'/1815'/i'",
            },
            ledger: {
                // ledger derivation
                accountType: 'ledger',
                bip43Path: "m/1852'/1815'/i'",
            },
        },
        coingeckoId: undefined,
        coingeckoNativeId: undefined,
    },
    txrp: {
        symbol: 'txrp',
        name: 'XRP Testnet',
        networkType: 'ripple',
        bip43Path: "m/44'/144'/i'/0/0",
        decimals: 6,
        testnet: true,
        explorer: {
            tx: 'https://test.bithomp.com/explorer/',
            account: 'https://test.bithomp.com/explorer/',
            address: 'https://test.bithomp.com/explorer/',
        },
        features: ['tokens'],
        customBackends: [],
        accountTypes: {},
        coingeckoId: undefined,
        coingeckoNativeId: 'test-ripple', // fake, coingecko does not have testnets
    },
} as const satisfies Networks;
