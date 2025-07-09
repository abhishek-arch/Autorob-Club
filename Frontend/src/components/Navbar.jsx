import React from 'react'
import autoroblogo from '../assets/images/Autoroblogo.png'
import '../Css/Navbar.css'
import hamburger from '../assets/images/hamburger.svg'
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

 
const navbar = ({isopen , setisopen}) => {

  const mouseclick = () => {
    setisopen(!isopen)
      
  } ;

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
   const handlelibrary = () => {
      if (!token) {
  
       toast("please login first", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    else {
        navigate("/Autorob-Club/library")
      }
    }
      
      
   

  return (
    <div>
      <div className='bg-gray-800 border-black flex items-center justify-between'>
        <img className='logo w-lg ' srcSet={autoroblogo} alt="" />
        <ul className='flex navbar justify-end gap-4 p-2 items-center text-white cursor-pointer text-lg font-semibold'>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Home</a></li>
        <li><Link onClick={handlelibrary} className="hover:text-blue-400 inline-block  hover:scale-125">Library</Link></li>
       
        <li><Link to="/Autorob-Club/signupoptions" className="hover:text-blue-400 inline-block hover:scale-125">Sign In</Link></li>
        <li><Link to="/Autorob-Club/userlogin" className="hover:text-blue-400 inline-block hover:scale-125">Login</Link></li>
        </ul> 
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
