import Web3 from "web3"
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"

export let web3ModalProvider = undefined

export async function connectToWallet() {
  web3ModalProvider = await web3Modal.connect()
  return new Web3(web3ModalProvider)
}

export function clearWalletProvider() {
  web3Modal.clearCachedProvider()
}

const providerOptions = {
  injected: {
    package: null
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "8b912ed1abb240778b91697adee55c0d",
    }
  }
}

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
})
