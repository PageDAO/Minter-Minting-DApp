const ALCHEMY_PRC_URL = "https://polygon-mainnet.g.alchemy.com/v2/f5LpbJ2eyEurydCMDameDYSJmLa8pPyS"
const NET = 'polygon' // polygon, rinkeby, mumbai
// const API_URL = 'http://192.168.104.27:3001/api'
// const API_URL = 'https://nftbb-minter-backend.herokuapp.com/api'
const API_URL = 'https://apiv2.nftbookbazaar.com/api'

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
  default:
    break;
}

export {
  ALCHEMY_PRC_URL,
  NET,
  TOKEN_ID,
  API_URL,
  CHAIN_ID,
  CHAIN_ID_HEX,
  OPENSEA_URL,
  ETHERSCAN_URL
}
