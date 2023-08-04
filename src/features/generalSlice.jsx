import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../utils/axios'

const initialState = {
  darkMode: false,
  projects: [],
  isLoading: false,
}

export const getProjects = createAsyncThunk(
  'general/getProjects',
  async (_, thunkAPI) => {
    try {
      const { data } = await customFetch.get('/projects')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProjects.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.projects = payload.projects
      })
      .addCase(getProjects.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export const { toggleDarkMode } = generalSlice.actions

export default generalSlice.reducer
