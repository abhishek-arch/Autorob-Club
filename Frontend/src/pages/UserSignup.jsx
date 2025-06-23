import { useState,useContext } from 'react'
import AutoRoblogo from '../assets/images/Autoroblogo.png'
import { Link, useNavigate } from 'react-router-dom'
import homesvg from '../assets/images/home.svg'
import {UserContextData} from '../Context/UserContext'


const Usersignup = () => {
    const  [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [Branch, setBranch] = useState("")
    const [RollNo, setRollNo] = useState("")
    
    const navigate = useNavigate()

  const{user, setUser} = useContext(UserContextData)
    const handlesubmit = (e) => {
        e.preventDefault()

       
        const payload = {
          "fullname":{
          "firstname": firstName,
            "lastname": lastName,
          },
           "email": email,
            "password": password,
            "RollNo": RollNo,
            "Branch": Branch
        }

        fetch(`${import.meta.env.VITE_BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload),
        })
        .then(async(Response)=>{
          if(Response.status===201){
            const data = await Response.json()
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/Autorob-Club/user-home')

          }
        })
          
        
       setFirstName("")
       setlastName("")
        setemail("")
        setPassword("")
        setBranch("")
        setRollNo("")
    }



   return (
     <div className='p-7 flex h-screen flex-col justify-between'>
         <div>
            <div className='flex justify-between items-center'>
                          <img className='w-52 mb-2 invert' src={AutoRoblogo} alt="" srcset="" />
                          <div>
                              <Link to="/Autorob-Club" className=' cursor-pointer'>
                          <img className='w-12 ' src={homesvg} alt="" />
                          </Link>
            
                          </div>
                        
            
            
                        </div>
       
       
       <form onSubmit={handlesubmit}>
         <h3 className='text-lg font-medium mt-5 mb-2'>What's your name</h3>
         <div className='flex  '>

          <input 
         required 
       
         className='border bg-[#eeeeee]  px-4 py-2 mr-2 rounded mb-7 w-1/2 text-lg placeholder:text-base'
         type="text"
         name='firstname'
         placeholder='First name'
         value={firstName} 
         onChange={(e) => setFirstName(e.target.value)} />
 
          <input 
         required 
       
         className='border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-1/2 text-lg placeholder:text-base'
         type="text"
         name='lastname'
         placeholder='Lastname' 
         alue={lastName} 
         onChange={(e) => setlastName(e.target.value)} />
 
 
 

         </div>
          
         <div className='flex  '>

          <input 
         required 
       
         className='border bg-[#eeeeee]  px-4 py-2 mr-2 rounded mb-7 w-1/2 text-lg placeholder:text-base'
         type="number"
         name='rollno'
         placeholder='Roll number'
         value={RollNo} 
         onChange={(e) => setRollNo(e.target.value)} />
 
          <input 
         required 
       
         className='border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-1/2 text-lg placeholder:text-base'
         type="text"
         name='Branch'
         placeholder='Branch' 
         alue={Branch} 
         onChange={(e) => setBranch(e.target.value)} />
 
 
 

         </div>
          
          


          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
 
 
 
         <input 
         required 
       
         className='border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base'
         type="email"
         name='email'
         placeholder='email@example.com'
         value={email}
          onChange={(e) => setemail(e.target.value)} /> 
 
 
         <h3 className='ext-lg font-medium mb-2'> Enter password</h3>
 
 
 
         <input 
         required 
       
 
         className='border bg-[#eeeeee]  px-4 py-2 rounded mb-7 w-full text-lg placeholder:text-base'
 
         type="password" 
         name="password" 
         placeholder='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         
         <button className=' bg-[#111] text-white font-semibold  px-4 py-2 rounded mb-3 w-full text-lg placeholder:text-base' type='submit'>Signup</button>
 
 
         
       </form>
 
         <p className='text-center'>
            Already have an Account ? <Link  to= '/Autorob-Club/UserLogin' className=' text-blue-500'>Login Here</Link> 
         </p>
 
 
 
         </div>
         <div className='flex items-center justify-between text-sm text-gray-500'>
           
          
              <span>Privacy Policy</span> 
              <span>Terms and Condition</span>
              <span>Contact us</span>
              <span>Help</span>
           
         </div>
 
     </div>
   )
 }

export default Usersignup
