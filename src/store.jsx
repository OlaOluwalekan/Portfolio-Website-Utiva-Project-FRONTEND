import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './features/generalSlice'
import adminSlice from './features/adminSlice'
import subscriberSlice from './features/subscriberSlice'

const store = configureStore({
  reducer: {
    general: generalSlice,
    admin: adminSlice,
    subscriber: subscriberSlice,
  },
})

export default store
