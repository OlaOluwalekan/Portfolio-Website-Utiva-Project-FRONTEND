import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './features/generalSlice'
import adminSlice from './features/adminSlice'

const store = configureStore({
  reducer: {
    general: generalSlice,
    admin: adminSlice,
  },
})

export default store
