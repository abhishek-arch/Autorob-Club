import React, { createContext,useState } from "react";



export const AdminContextData = createContext()


const AdminContext = ({children})=>{
const [admin,setAdmin]= useState({
    email:"",
    password:""
});
const [isLoading,setIsLoading]= useState(true)
const [error,setError]= useState(null)


const updateAdmin = (adminData)=>{
    setAdmin(adminData)
}
const value = {
     admin,
    setAdmin,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateAdmin
}
return(
    <AdminContextData.Provider value ={value}>
        {children}
        </AdminContextData.Provider>
)
}
export default AdminContext