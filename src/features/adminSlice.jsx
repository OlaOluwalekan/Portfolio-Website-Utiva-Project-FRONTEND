import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../utils/axios'
import {
  addAdminToLocalStorage,
  getAdminFromLocalStorage,
} from '../utils/localStorage'

const initialState = {
  admin: getAdminFromLocalStorage(),
  isLoading: false,
}

export const loginAdmin = createAsyncThunk(
  'admin/loginAdmin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await customFetch.post('admin/auth/login', payload)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.admin = payload.admin
        addAdminToLocalStorage(payload.admin)
      })
      .addCase(loginAdmin.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export default adminSlice.reducer
