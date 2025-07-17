import { motion } from 'framer-motion'
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



        <motion.img 
        
 initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
        
        
        className='logo w-lg ' srcSet={autoroblogo} alt="" />




        <ul className='flex navbar justify-end gap-4 p-2 items-center text-white cursor-pointer text-lg font-semibold'>
        <motion.li
         initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 ,
                
                }}
        
        ><Link  className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-medium transition-colors duration-300 group">Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
        </Link></motion.li>



        <motion.li
        
         initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.9 ,
                
                }}
        >
          
          <Link to='/Autorob-Club/library' className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-medium transition-colors duration-300 group">Library
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          
          </motion.li>



         <motion.li
         
          initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 1.1 ,
                
                }}
         >
          
          <Link to="/Autorob-Club/user-profile" className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-medium transition-colors duration-300 group">Dashboard

          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
         
         </motion.li>

        <motion.li
         initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 1.3 ,
                
                }}
        
        >
          
          
          <Link  onClick={handleClicklogout} className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-medium transition-colors duration-300 group">Logout
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          
          </Link>
          
          </motion.li>

        
          
       
       
        </ul> 
        <div  className="hamburger border-2 mr-4 " ><img  className='invert' src={hamburger} alt="" onClick={mouseclick}   /></div>
      </div>
    </div>
  )
}

export default navbar
