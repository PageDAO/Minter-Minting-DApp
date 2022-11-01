import { createSlice } from "@reduxjs/toolkit"

export const membershipSlice = createSlice({
  name: 'membership',
  initialState: {
    hasMembership: false
  },
  reducers: {
    setMembership: (state, action) => {
      state.hasMembership = action.payload
    }
  }
})

export const {
  setMembership
} = membershipSlice.actions

export default membershipSlice.reducer