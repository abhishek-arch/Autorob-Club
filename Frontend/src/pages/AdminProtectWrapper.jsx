
import React,{useContext,useEffect, useState} from 'react';

import { useNavigate } from 'react-router-dom';
import { AdminContextData } from '../Context/AdminContext';

import axios from 'axios'
const AdminProtectWrapper = ({children}) => {


  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  const {admin,setAdmin} = useContext(AdminContextData)
  
useEffect(() => {
  
    if(!token){
      navigate('/Autorob-Club/adminlogin')

    } 
    axios.get(`${import.meta.env.VITE_BASE_URL}/admins/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        },
         
    }).then(response=>{
        if (response.status===200){
            setAdmin(response.data.admin)
            setIsLoading(false)
        }
    })
    .catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/Autorob-Club/adminlogin')
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


export default AdminProtectWrapper
