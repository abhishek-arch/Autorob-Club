
import Navbar from "../components/Navbar";
import Header from "../components/Header";


import { useState, useRef, } from "react";
import "../Css/index.css";
import "../Css/App.css";
import Cross from "../assets/images/Cross.svg";
import Spline from "../components/Spline";
import ClubActivities from "../components/ClubActivities";
import MemberSection from "../components/Members";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";


    



export default function AutoRobClub() {
  const [isopen, setisopen] = useState(false);
  const mouseclick = () => {
    setisopen(!isopen);
  };

  const navigate = useNavigate();

  
  

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
              <a
                href="#"
                className="hover:text-blue-400 inline-block  hover:scale-125"
              >
                Home
              </a>
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
              to="/Autorob-Club/user-profile"
              
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
             Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/Autorob-Club/userlogin"
              
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