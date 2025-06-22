import React,{useContext,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextData } from '../Context/UserContext';

import axios from 'axios'

const UserProtectWrapper = ({children}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  const {user,setUser} = useContext(UserContextData)
  
useEffect(() => {
  
    if(!token){
      navigate('/Autorob-Club/userlogin')

    } 
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        },
         
    }).then(response=>{
        if (response.status===200){
            setUser(response.data.user)
            setIsLoading(false)
        }
    })
    .catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/Autorob-Club/userlogin')
    })
    
}, [])

 if(isLoading){
    return(
        <div>Loading...</div>
    )
 }
  
  
  return (

  <>{children}</>

  )
}   
export default UserProtectWrapper;