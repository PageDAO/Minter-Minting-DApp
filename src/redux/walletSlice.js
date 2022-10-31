import { createSlice } from "@reduxjs/toolkit"

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: 'address'
  },
  reducers: {
    setWallet: (state, action) => {
      state.address = action.payload
    }
  }
})

export const {
  setWallet
} = walletSlice.actions

export default walletSlice.reducer