import { ChainId } from '@sushiswap/core-sdk';


const Arbitrum = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/arbitrum.jpg'
const Avalanche = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/avalanche.jpg'
const Bsc = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/bsc.jpg'
const Fantom = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/fantom.jpg'
const Goerli = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/goerli.jpg'
const Harmony = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/harmonyone.jpg'
const Heco = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/heco.jpg'
const Kovan = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/kovan.jpg'
const Mainnet = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg'
const Matic = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg'
const Moonbeam = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/moonbeam.jpg'
const OKEx = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/okex.jpg'
const Polygon = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg'
const Rinkeby = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/rinkeby.jpg'
const Ropsten = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/ropsten.jpg'
const xDai = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/gnosis.jpg'
const Celo = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/celo.jpg'
const Palm = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/palm.jpg'
const Moonriver = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/moonriver.jpg'
const Fuse = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/fuse.jpg'
const Telos = 'https://raw.githubusercontent.com/sushiswap/icons/master/network/telos.jpg'

export const NETWORK_ICON: Record<number, string> = {
    [ChainId.ETHEREUM]: Mainnet,
    [ChainId.ROPSTEN]: Ropsten,
    [ChainId.RINKEBY]: Rinkeby,
    [ChainId.GÖRLI]: Goerli,
    [ChainId.KOVAN]: Kovan,
    [ChainId.FANTOM]: Fantom,
    [ChainId.FANTOM_TESTNET]: Fantom,
    [ChainId.BSC]: Bsc,
    [ChainId.BSC_TESTNET]: Bsc,
    [ChainId.MATIC]: Polygon,
    [ChainId.MATIC_TESTNET]: Matic,
    [ChainId.XDAI]: xDai,
    [ChainId.ARBITRUM]: Arbitrum,
    [ChainId.ARBITRUM_TESTNET]: Arbitrum,
    [ChainId.MOONBEAM_TESTNET]: Moonbeam,
    [ChainId.AVALANCHE]: Avalanche,
    [ChainId.AVALANCHE_TESTNET]: Avalanche,
    [ChainId.HECO]: Heco,
    [ChainId.HECO_TESTNET]: Heco,
    [ChainId.HARMONY]: Harmony,
    [ChainId.HARMONY_TESTNET]: Harmony,
    [ChainId.OKEX]: OKEx,
    [ChainId.OKEX_TESTNET]: OKEx,
    [ChainId.CELO]: Celo,
    [ChainId.PALM]: Palm,
    [ChainId.MOONRIVER]: Moonriver,
    [ChainId.FUSE]: Fuse,
    [ChainId.TELOS]: Telos,
    // [ChainId.MOONBEAM]: Moonbeam,
}

export const NETWORK_LABEL: Record<number, string> = {
    [ChainId.ETHEREUM]: 'Ethereum',
    [ChainId.RINKEBY]: 'Rinkeby',
    [ChainId.ROPSTEN]: 'Ropsten',
    [ChainId.GÖRLI]: 'Görli',
    [ChainId.KOVAN]: 'Kovan',
    [ChainId.FANTOM]: 'Fantom',
    [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
    [ChainId.MATIC]: 'Polygon',
    [ChainId.MATIC_TESTNET]: 'Polygon Testnet',
    [ChainId.XDAI]: 'Gnosis',
    [ChainId.ARBITRUM]: 'Arbitrum',
    [ChainId.ARBITRUM_TESTNET]: 'Arbitrum Testnet',
    [ChainId.BSC]: 'BSC',
    [ChainId.BSC_TESTNET]: 'BSC Testnet',
    [ChainId.MOONBEAM_TESTNET]: 'Moonbase',
    [ChainId.AVALANCHE]: 'Avalanche',
    [ChainId.AVALANCHE_TESTNET]: 'Fuji',
    [ChainId.HECO]: 'HECO',
    [ChainId.HECO_TESTNET]: 'HECO Testnet',
    [ChainId.HARMONY]: 'Harmony',
    [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
    [ChainId.OKEX]: 'OKEx',
    [ChainId.OKEX_TESTNET]: 'OKEx',
    [ChainId.CELO]: 'Celo',
    [ChainId.PALM]: 'Palm',
    [ChainId.MOONRIVER]: 'Moonriver',
    [ChainId.FUSE]: 'Fuse',
    [ChainId.TELOS]: 'Telos EVM',
    // [ChainId.MOONBEAM]: 'Moonbeam',
}


export const SUPPORTED_NETWORKS: Record<
    number,
    {
        chainId: string
        chainName: string
        nativeCurrency: {
            name: string
            symbol: string
            decimals: number
        }
        rpcUrls: string[]
        blockExplorerUrls: string[]
    }
> = {
    [ChainId.ETHEREUM]: {
        chainId: '0x1',
        chainName: 'Ethereum',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.infura.io/v3'],
        blockExplorerUrls: ['https://etherscan.com'],
    },
    [ChainId.ROPSTEN]: {
        chainId: '0x3',
        chainName: 'Ropsten',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://ropsten.infura.io/v3'],
        blockExplorerUrls: ['https://ropsten.etherscan.com'],
    },
    [ChainId.RINKEBY]: {
        chainId: '0x4',
        chainName: 'Rinkeby',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://rinkeby.infura.io/v3'],
        blockExplorerUrls: ['https://rinkeby.etherscan.com'],
    },
    [ChainId.GÖRLI]: {
        chainId: '0x5',
        chainName: 'Görli',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://goerli.infura.io/v3'],
        blockExplorerUrls: ['https://goerli.etherscan.com'],
    },
    [ChainId.KOVAN]: {
        chainId: '0x2A',
        chainName: 'Kovan',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://kovan.infura.io/v3'],
        blockExplorerUrls: ['https://kovan.etherscan.com'],
    },
    [ChainId.FANTOM]: {
        chainId: '0xfa',
        chainName: 'Fantom',
        nativeCurrency: {
            name: 'Fantom',
            symbol: 'FTM',
            decimals: 18,
        },
        rpcUrls: ['https://rpcapi.fantom.network'],
        blockExplorerUrls: ['https://ftmscan.com'],
    },
    [ChainId.BSC]: {
        chainId: '0x38',
        chainName: 'Binance Smart Chain',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org'],
        blockExplorerUrls: ['https://bscscan.com'],
    },
    [ChainId.MATIC]: {
        chainId: '0x89',
        chainName: 'Matic',
        nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://polygon-rpc.com'], // ['https://matic-mainnet.chainstacklabs.com/'],
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    [ChainId.HECO]: {
        chainId: '0x80',
        chainName: 'Heco',
        nativeCurrency: {
            name: 'Heco Token',
            symbol: 'HT',
            decimals: 18,
        },
        rpcUrls: ['https://http-mainnet.hecochain.com'],
        blockExplorerUrls: ['https://hecoinfo.com'],
    },
    [ChainId.XDAI]: {
        chainId: '0x64',
        chainName: 'xDai',
        nativeCurrency: {
            name: 'xDai Token',
            symbol: 'xDai',
            decimals: 18,
        },
        rpcUrls: ['https://rpc.xdaichain.com'],
        blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
    },
    [ChainId.HARMONY]: {
        chainId: '0x63564C40',
        chainName: 'Harmony',
        nativeCurrency: {
            name: 'One Token',
            symbol: 'ONE',
            decimals: 18,
        },
        rpcUrls: [
            'https://api.harmony.one',
            'https://s1.api.harmony.one',
            'https://s2.api.harmony.one',
            'https://s3.api.harmony.one',
        ],
        blockExplorerUrls: ['https://explorer.harmony.one/'],
    },
    [ChainId.AVALANCHE]: {
        chainId: '0xA86A',
        chainName: 'Avalanche Mainnet C-Chain',
        nativeCurrency: {
            name: 'Avalanche Token',
            symbol: 'AVAX',
            decimals: 18,
        },
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://snowtrace.io'],
    },
    [ChainId.OKEX]: {
        chainId: '0x42',
        chainName: 'OKEx',
        nativeCurrency: {
            name: 'OKEx Token',
            symbol: 'OKT',
            decimals: 18,
        },
        rpcUrls: ['https://exchainrpc.okex.org'],
        blockExplorerUrls: ['https://www.oklink.com/okexchain'],
    },
    [ChainId.ARBITRUM]: {
        chainId: '0xA4B1',
        chainName: 'Arbitrum',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io'],
    },
    [ChainId.CELO]: {
        chainId: '0xA4EC',
        chainName: 'Celo',
        nativeCurrency: {
            name: 'Celo',
            symbol: 'CELO',
            decimals: 18,
        },
        rpcUrls: ['https://forno.celo.org'],
        blockExplorerUrls: ['https://explorer.celo.org'],
    },
    [ChainId.MOONRIVER]: {
        chainId: '0x505',
        chainName: 'Moonriver',
        nativeCurrency: {
            name: 'Moonriver',
            symbol: 'MOVR',
            decimals: 18,
        },
        rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
        blockExplorerUrls: ['https://moonriver.moonscan.io'],
    },
    [ChainId.FUSE]: {
        chainId: '0x7A',
        chainName: 'Fuse',
        nativeCurrency: {
            name: 'Fuse',
            symbol: 'FUSE',
            decimals: 18,
        },
        rpcUrls: ['https://rpc.fuse.io'],
        blockExplorerUrls: ['https://explorer.fuse.io'],
    },
    [ChainId.TELOS]: {
        chainId: '0x28',
        chainName: 'Telos',
        nativeCurrency: {
            name: 'Telos',
            symbol: 'TLOS',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.telos.net/evm'],
        blockExplorerUrls: ['https://rpc1.us.telos.net/v2/explore'],
    },
    [ChainId.PALM]: {
        chainId: '0x2A15C308D',
        chainName: 'Palm',
        nativeCurrency: {
            name: 'Palm',
            symbol: 'PALM',
            decimals: 18,
        },
        rpcUrls: ['https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267'],
        blockExplorerUrls: ['https://explorer.palm.io'],
    },
    [ChainId.MOONBEAM]: {
        chainId: '0x504',
        chainName: 'Moonbeam',
        nativeCurrency: {
            name: 'Glimmer',
            symbol: 'GLMR',
            decimals: 18,
        },
        rpcUrls: ['https://rpc.api.moonbeam.network'],
        blockExplorerUrls: ['https://moonbeam.moonscan.io'],
    },
}