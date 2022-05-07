import { NET } from "./env"

let ComunityContractAddr = ''
let UniftyContractAddr = ''
let MembershipContractAddr = ''
let Membership721ContractAddr = ''


switch (NET) {
    case 'rinkeby':
        ComunityContractAddr = '0x70332FcA05DF80a64a0328029E6536DCc56bCc7b'
        UniftyContractAddr = '0xa8C3Fdf18698970B6E1Fb59D00dFf6114e242372'
        MembershipContractAddr = '0x8082e704e8D96b887d8511c3a27ef8DB3bEA8E77'
        Membership721ContractAddr = ''
        break;

    case 'mumbai':
        ComunityContractAddr = '0xf659299E49A09beC21658E5506227F685A1728Ab'
        UniftyContractAddr = '0x59d7cdff93d01c98f64617efb677d9de44d4795d'
        MembershipContractAddr = '0x318acfd0a572fa257ea1ebb9c4c76a2458aaeedb'
        Membership721ContractAddr = ''
        break;

    case 'polygon':
        ComunityContractAddr = '0xEd5467Fd62250788EdaA228ae27a609A39B354B0'
        UniftyContractAddr = '0x931204Fb8CEA7F7068995dcE924F0d76d571DF99'
        MembershipContractAddr = '0x2953399124f0cbb46d2cbacd8a89cf0599974963'
        Membership721ContractAddr = '0xd9ff4b61817ff3246d012ff8918e3e8b8dfa5a39'
        break;
    default:
        break;
}

export {
    ComunityContractAddr,
    UniftyContractAddr,
    MembershipContractAddr,
    Membership721ContractAddr
}