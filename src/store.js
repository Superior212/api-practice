import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import userSlice, { userReducer } from './slices/userSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    profile:  userReducer
  }
})