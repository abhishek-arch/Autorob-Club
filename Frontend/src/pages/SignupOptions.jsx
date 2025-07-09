import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import AutoRoblogo from "../assets/images/Autoroblogo.png";

const SignupOptions = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-self-center'>
          <img
                      className="w-52 mb-2 invert"
                      src={AutoRoblogo}
                      alt=""
                      srcset=""
                    />
                    <h1 className='text-3xl font-bold'>AUTOROB CLUB</h1>
      </div>

       <Link
          to="/Autorob-Club/AdminSignup"
          className=" bg-[#10b461] flex items-center justify-center text-white font-semibold  px-4 py-2 rounded mb-3 w-full text-lg placeholder:text-base"
        >
          Register as Admin
        </Link>
       <Link
            to="/Autorob-Club/UserSignup"
            className=" bg-[#d5622d] flex items-center justify-center text-white font-semibold  px-4 py-2 rounded mb-5 w-full text-lg placeholder:text-base"
          >
            Register as User
          </Link>
    </div>
  )
}

export default SignupOptions
