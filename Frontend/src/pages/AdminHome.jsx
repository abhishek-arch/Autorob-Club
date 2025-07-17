
import Navbar from "../components/AdminHomeNav";
import Header from "../components/Header";



import { useState, useRef, } from "react";
import "../Css/index.css";
import "../Css/App.css";
import Cross from "../assets/images/Cross.svg";
import Spline from "../components/Spline";
import ClubActivities from "../components/ClubActivities";
import MemberSection from "../components/Members";
import Footer from "../components/Footer";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


    



export default function AutoRobClub() {
  const [isopen, setisopen] = useState(false);
  const mouseclick = () => {
    setisopen(!isopen);
  };
 const navigate = useNavigate()

 const token = localStorage.getItem('token')

  const handleClicklogout = () => {
    
    axios.post(`${import.meta.env.VITE_BASE_URL}/admins/logout`, {},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      localStorage.removeItem('token')
     console.log('Logout successful:', response.data);
      navigate('/Autorob-Club/adminlogin')
    })
    .catch((error) => {
      console.error('Error during logout:', error);
    });
  }
  

  return (
    <div className=" relative bg-gray-900 text-white min-h-screen font-sans overflow-hidden">
      <Spline />
      <div
        className={`floating_bar ${
          isopen ? "open" : ""
        } border-2 border-black float-right  w-80 h-screen`}
      >
        <ul className="flex  justify-end gap-10 p-2 items-center flex-col text-white cursor-pointer text-lg font-semibold">
          <div className="home_cross flex">
            <li className="">
              <Link
               
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-bold transition-colors duration-300 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <img
              className="invert fixed right-0 cursor-pointer"
              src={Cross}
              alt=""
              onClick={mouseclick}
            />
          </div>
          <li >
            <Link
              to="/Autorob-Club/library"
            
             className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-bold transition-colors duration-300 group"
            >
              Library
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/Autorob-Club/admin-profile"
              
             className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-bold transition-colors duration-300 group"
            >
             Dashboard
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              
              onClick={handleClicklogout }
              
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400  font-bold transition-colors duration-300 group"
            >
              Logout
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
     
      <Navbar isopen={isopen} setisopen={setisopen} />
      <Header />
      <ClubActivities />
      <MemberSection />
      <Footer />
    </div>
  );
}