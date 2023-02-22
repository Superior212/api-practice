import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from './slices/userSlice'
import { useState } from 'react'
const Dashboard = () => {
    const {profile} = useSelector((state)=> state)
    const [user, setUser] = useState(profile)

    const handleChange =(e) =>{
        const value = e.target.value
        const name  = e.target.name
        setUser({...user,[name]: value})
        dispatch(setProfile({...user,[name]: value}))
    }

    const dispatch = useDispatch()
    const editProfile = () =>{
        dispatch(setProfile(user))
    }
  return (
    <>
    <a href="/home">Home</a>|
    <a href="/about">About</a>|
    <a href="/contact">Contact</a>|
    <a href="/counter">Counter</a>
    
    </>
  )
}

export default Dashboard