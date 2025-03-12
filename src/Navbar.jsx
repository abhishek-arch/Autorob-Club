import React from 'react'
import autoroblogo from './assets/Autoroblogo.png'
import './Navbar.css'
import hamburger from './hamburger.svg'
 
const navbar = ({isopen , setisopen}) => {

  const mouseclick = () => {
    setisopen(!isopen)
      
  } ;
      
   

  return (
    <div>
      <div className='bg-gray-800 border-black flex items-center justify-between'>
        <img className='logo w-lg ' srcSet={autoroblogo} alt="" />
        <ul className='flex navbar justify-end gap-4 p-2 items-center text-white cursor-pointer text-lg font-semibold'>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 inline-block  hover:scale-125">Library</a></li>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Sign In</a></li>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Login</a></li>
        </ul> 
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
