import { NET } from "./env"

let ComunityContractAddr = ''
let UniftyContractAddr = ''
let MembershipContractAddr = ''
let Membership721ContractAddr = ''
let MarketplaceContractAddr = ''


switch (NET) {
    case 'rinkeby':
        ComunityContractAddr = '0x70332FcA05DF80a64a0328029E6536DCc56bCc7b'
        UniftyContractAddr = '0xa8C3Fdf18698970B6E1Fb59D00dFf6114e242372'
        MembershipContractAddr = '0x8082e704e8D96b887d8511c3a27ef8DB3bEA8E77'
        Membership721ContractAddr = ''
        MarketplaceContractAddr = ''
        break;

    case 'mumbai':
        ComunityContractAddr = '0xf659299E49A09beC21658E5506227F685A1728Ab'
        UniftyContractAddr = '0x59d7cdff93d01c98f64617efb677d9de44d4795d'
        MembershipContractAddr = '0x318acfd0a572fa257ea1ebb9c4c76a2458aaeedb'
        Membership721ContractAddr = ''
        MarketplaceContractAddr = ''
        break;

    case 'polygon':
        ComunityContractAddr = '0xEd5467Fd62250788EdaA228ae27a609A39B354B0'
        UniftyContractAddr = '0x931204Fb8CEA7F7068995dcE924F0d76d571DF99'
        MembershipContractAddr = '0x2953399124f0cbb46d2cbacd8a89cf0599974963'
        Membership721ContractAddr = '0xd9ff4b61817ff3246d012ff8918e3e8b8dfa5a39'
        MarketplaceContractAddr = ''
        break;
        
    case 'optimism':
        ComunityContractAddr = '0x75fFAF8711Cf9E0B36eaCdEf407f396F7628e976'
        UniftyContractAddr = '0xE7F967Ed990C4db5262b592A3e5B70e29Dd585c3'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x94A56cBd3bb49664f333c3B559F2bD8cb9Ae55a0'
        MarketplaceContractAddr = '0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0'
        break;
    
    case 'arbitrum-one':
        ComunityContractAddr = '0xdf67df1C4cE31e98Fb39a47fb54c8bb6cFd2F677'
        UniftyContractAddr = '0xB20dE3908b070b55B7E844579A1A198f59b414E4'
        MembershipContractAddr = '0x07879B67b0a2035F619ceab0dF7C78bB74924C16'
        Membership721ContractAddr = '0x07879B67b0a2035F619ceab0dF7C78bB74924C16'
        MarketplaceContractAddr = '0x151Edef9D633251476523581447defed4C456cC1'
        break;

//todo: deploy community mint control to goerli - now test
    case 'goerli':
        ComunityContractAddr = '0xCc21Bc96c4aDaC5DE21b758F796F871EE8643b47'
        UniftyContractAddr = '0x7f2350768d21ba4E2449beEe05535b1fE7D0B700'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x836f84E121643b90c6aFf9f4D84561b0Ac69423c'
        MarketplaceContractAddr = '0xCFA7cA9fD5d32A6E9104aC849b1094Ea8c71e294'
        break;

    default:
        break;
}

export {
    ComunityContractAddr,
    UniftyContractAddr,
    MembershipContractAddr,
    Membership721ContractAddr,
    MarketplaceContractAddr
}
