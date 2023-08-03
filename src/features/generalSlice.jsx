import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { toggleDarkMode } = generalSlice.actions

export default generalSlice.reducer
