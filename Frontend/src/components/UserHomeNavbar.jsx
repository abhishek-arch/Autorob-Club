import React from 'react'
import autoroblogo from '../assets/images/Autoroblogo.png'
import '../Css/Navbar.css'
import hamburger from '../assets/images/hamburger.svg'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
 
const navbar = ({isopen , setisopen}) => {
  const token = localStorage.getItem('token')

  const mouseclick = () => {
    setisopen(!isopen)
      
  } ;
  const navigate = useNavigate()
  
  const handleClicklogout = () => {
  
    axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`,{}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
        localStorage.removeItem('token')
     console.log('Logout successful:', response.data);
      navigate('/Autorob-Club/userlogin')
    })
    .catch((error) => {
      console.error('Error during logout:', error);
    });
  }
      
   

  return (
    <div>
      <div className='bg-gray-800 border-black flex items-center justify-between'>
        <img className='logo w-lg ' srcSet={autoroblogo} alt="" />
        <ul className='flex navbar justify-end gap-4 p-2 items-center text-white cursor-pointer text-lg font-semibold'>
        <li><Link  className="hover:text-blue-400 inline-block hover:scale-125">Home</Link></li>



        <li><Link to='/Autorob-Club/library' className="hover:text-blue-400 inline-block  hover:scale-125">Library</Link></li>



         <li><Link to="/Autorob-Club/user-profile" className="hover:text-blue-400 inline-block hover:scale-125">Dashboard</Link></li>

        <li><Link  onClick={handleClicklogout} className="hover:text-blue-400 inline-block hover:scale-125">Logout</Link></li>

        
          
       
       
        </ul> 
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
