import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'profile',
  initialState: {
    firstname :"felix",
    lastname :"Sqi",
    course :"software",
    school :"Sqi",
  },
  reducers: {
    setProfile: (state, {payload}) => {
    state = {...state, ...payload}
    return state
    
    },
   
  }
})

export const {setProfile } = userSlice.actions

export  const userReducer = userSlice.reducer