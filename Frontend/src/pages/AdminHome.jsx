
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
               
                className="hover:text-blue-400 inline-block  hover:scale-125"
              >
                Home
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
            
              className="hover:text-blue-400 inline-block  hover:scale-125"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/Autorob-Club/admin-profile"
              
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
             Dashboard
            </Link>
          </li>
          <li>
            <Link
              
              onClick={handleClicklogout }
              
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
              Logout
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