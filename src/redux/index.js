import { enableMapSet } from 'immer'
import { configureStore } from '@reduxjs/toolkit'

import membershipReducer from './membershipSlice'
import walletReducer from './walletSlice'

enableMapSet()

const store = configureStore({
  reducer: {
    membership: membershipReducer,
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
