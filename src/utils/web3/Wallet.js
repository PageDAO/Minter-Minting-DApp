import { clearWalletProvider, connectToWallet, web3ModalProvider } from "./Web3Modal";
import { CHANGE_WALLET } from '../../actions/types';

import store from '../../store'
import { ComunityContractAddr, MembershipContractAddr, UniftyContractAddr } from "../../constant/contractAddr";
import MainABI from '../../constant/abi/MainABI.json'
import MembershipABI from '../../constant/abi/MembershipABI.json'
import ReadmeABI from '../../constant/abi/ReadmeABI.json'

export let accountAddress = undefined
export let web3Modal = undefined
export let chainId = null
export let comunityContract = null
export let membershipContract = null
export let uniftyContract = null

async function updateAccount() {
  const accounts = await web3Modal.eth.getAccounts()
  updateAccountAddress(accounts)

  if (web3ModalProvider !== undefined && web3ModalProvider !== null) {
    web3ModalProvider.on("accountsChanged", (accounts) => {
      updateAccountAddress(accounts)
      store.dispatch({ type: CHANGE_WALLET, payload: accounts[0] })
    });
    web3ModalProvider.on("chainChanged", (id) => {
      window.location.reload()
    });
  }
}

export async function initWallet() {
  try {
    web3Modal = await connectToWallet()

    chainId = await web3Modal.eth.net.getId();
    comunityContract = new web3Modal.eth.Contract(MainABI, ComunityContractAddr)
    membershipContract = new web3Modal.eth.Contract(MembershipABI, MembershipContractAddr)
    uniftyContract = new web3Modal.eth.Contract(ReadmeABI, UniftyContractAddr)

    await updateAccount()
  } catch (e) {
    console.log("wallet connect error, reconnecting")
  }
}

export function updateAccountAddress(accounts) {
  if (accounts !== undefined && accounts.length > 0) {
    accountAddress = accounts[0]
  } else if (accountAddress !== undefined) {
    clearWalletProvider()
    accountAddress = undefined
  }
}

export function closeWalletProvider() {
  clearWalletProvider();
}