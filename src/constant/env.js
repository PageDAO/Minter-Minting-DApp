const ALCHEMY_PRC_URL = "https://polygon-mainnet.g.alchemy.com/v2/f5LpbJ2eyEurydCMDameDYSJmLa8pPyS"
const NET = 'arbitrum-one' // polygon, rinkeby, mumbai, goerli
// const API_URL = 'http://192.168.104.27:3001/api'
// const API_URL = 'https://nftbb-minter-backend.herokuapp.com/api'
// todo: change this to dev server
const API_URL = 'https://minterbackend.onrender.com/api'
const MARKETPLACE_URL = 'https://main--gleeful-sunburst-65c589.netlify.app/'

let TOKEN_ID = 0
let CHAIN_ID = 0
let CHAIN_ID_HEX = ''
let ETHERSCAN_URL = ''
let OPENSEA_URL = ''

switch (NET) {
  case 'rinkeby':
    CHAIN_ID = 4
    CHAIN_ID_HEX = '0x4'
    ETHERSCAN_URL = 'https://rinkeby.etherscan.io/tx'
    OPENSEA_URL = 'https://testnets.opensea.io/assets'
    TOKEN_ID = 1
    break;

  case 'mumbai':
    CHAIN_ID = 80001
    CHAIN_ID_HEX = '0x13881'
    ETHERSCAN_URL = 'https://mumbai.polygonscan.com/tx'
    OPENSEA_URL = 'https://testnets.opensea.io/assets/mumbai'
    TOKEN_ID = 0
    break;

  case 'polygon':
    CHAIN_ID = 137
    CHAIN_ID_HEX = '0x89'
    ETHERSCAN_URL = 'https://polygonscan.com/tx'
    OPENSEA_URL = 'https://opensea.io/assets/matic'
    TOKEN_ID = "111515117730074772965449733806193829182550002799402836500696112828456993030244"
    break;

  case 'goerli':
    CHAIN_ID = 5
    CHAIN_ID_HEX = '0x5'
    ETHERSCAN_URL = 'https://goerli.etherscan.io/tx'
    OPENSEA_URL = 'https://testnets.opensea.io/assets/goerli'
    TOKEN_ID = ''
    break;
        
  case 'optimism':
    CHAIN_ID = 10
    CHAIN_ID_HEX = '0xA'
    ETHERSCAN_URL = 'https://optimism.etherscan.io/'
    OPENSEA_URL = 'https://optimism.opensea.io/assets'
    TOKEN_ID = 0
    break;
    
  case 'arbitrum-one':
    CHAIN_ID = 42161
    CHAIN_ID_HEX = '0xA4B1'
    ETHERSCAN_URL = 'https://arbiscan.io/'
    OPENSEA_URL = 'https://opensea.io/assets/arbitrum'
    TOKEN_ID = '0'
    break;

  default:
    break;
}

export {
  ALCHEMY_PRC_URL,
  NET,
  TOKEN_ID,
  API_URL,
  MARKETPLACE_URL,
  CHAIN_ID,
  CHAIN_ID_HEX,
  OPENSEA_URL,
  ETHERSCAN_URL
}
