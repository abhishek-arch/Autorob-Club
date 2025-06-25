import React from 'react'
import autoroblogo from '../assets/images/Autoroblogo.png'
import '../Css/Navbar.css'
import hamburger from '../assets/images/hamburger.svg'
import { Link } from 'react-router-dom'

 
const navbar = ({isopen , setisopen}) => {
  const token = localStorage.getItem('token')

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
        {token ? <><li><Link to="/Autorob-Club/admin-profile" className="hover:text-blue-400 inline-block hover:scale-125">Dashboard</Link></li>
        <li><Link to="/Autorob-Club/adminlogin" onClick={()=>router.post('admins/logout')} className="hover:text-blue-400 inline-block hover:scale-125">Logout</Link></li>

        
        </> : <> <li><Link to="/Autorob-Club/adminsignup" className="hover:text-blue-400 inline-block hover:scale-125">Sign In</Link></li>
        <li><Link to="/Autorob-Club/adminlogin" className="hover:text-blue-400 inline-block hover:scale-125">Login</Link></li> </>}
       
       
        </ul> 
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
