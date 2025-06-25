
import Navbar from "./components/Navbar";
import Header from "./components/Header";


import { useState, useRef, } from "react";
import "./Css/index.css";
import "./Css/App.css";
import Cross from "./assets/images/Cross.svg";
import Spline from "./components/Spline";
import ClubActivities from "./components/ClubActivities";
import MemberSection from "./components/Members";
import Footer from "./components/Footer";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


    



export default function AutoRobClub() {
  const [isopen, setisopen] = useState(false);
  const token = localStorage.getItem('token')
  const navigate = useNavigate()



  const mouseclick = () => {
    setisopen(!isopen);
  };

  const handlelibrary = () => {
    if (!token) {

     toast("please login first", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  else {
      navigate("/Autorob-Club/library")
    }
  }
    

  return (

    <>
     <ToastContainer
      width="30px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    
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
                href="#"
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
          <li onClick={handlelibrary}>

            <Link
            
              className="hover:text-blue-400 inline-block  hover:scale-125"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/Autorob-Club/UserSignup"
              
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/Autorob-Club/UserLogin"
              
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
              Login
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
    </>
  );
}