import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../utils/axios'
import { addSubToLocalStorage } from '../utils/localStorage'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  subscriber: null,
  codeIsOpen: false,
}

export const createSubscriber = createAsyncThunk(
  'subscriber/createSubscriber',
  async (payload, thunkAPI) => {
    try {
      const { data } = await customFetch.post('subscribers/create', payload)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

export const verifyEmail = createAsyncThunk(
  'subscriber/verifyEmail',
  async (payload, thunkAPI) => {
    try {
      const { data } = await customFetch.put(
        'subscribers/create/verify',
        payload,
        {
          headers: {
            authorization: `Bearer ${
              thunkAPI.getState().subscriber.subscriber.code
            }`,
          },
        }
      )
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSubscriber.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSubscriber.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.subscriber = payload
        addSubToLocalStorage(payload)
        state.codeIsOpen = true
        toast.success('Verification mail sent')
      })
      .addCase(createSubscriber.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
        toast.error(payload)
      })
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.subscriber = payload
        addSubToLocalStorage(payload)
        state.codeIsOpen = false
        toast.success('Email Verified')
      })
      .addCase(verifyEmail.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
        toast.error(payload)
      })
  },
})

export default subscriberSlice.reducer
