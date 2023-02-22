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

const Input = () => {
  return (
    <>
    
    <h1>{profile.firstname} </h1>
        
  
        <input type="text" onChange={handleChange} name="firstname" value={user.firstname}/>
        <button onClick={editProfile}>EDIT</button>
    
    </>  
    )
}
}

export default Input