import {
  CHANGE_WALLET
}
  from "./types"

export function changeWallet(address) {
  return dispatch => dispatch({ type: CHANGE_WALLET, payload: address })
}