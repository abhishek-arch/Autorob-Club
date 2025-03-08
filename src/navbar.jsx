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
      <div className='border-b-2 bg-black border-black flex items-center justify-between'>
        <img className='logo w-lg ' srcSet={autoroblogo} alt="" />
        <ul className='flex navbar justify-end gap-2 p-2 items-center text-white'>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Library</li>
        </ul>
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
