import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "./Navbar";
import {
  FaBars,
  FaLinkedin,
  FaInstagram,
  FaTrophy,
  FaLightbulb,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import "./index.css";
import "./App.css";
import Cross from "./Cross.svg";
import Spline from "./Spline";

function Header() {
  return (
    <header className="relative  flex flex-col justify-center items-center text-center flex-wrap">
      <motion.h1
        className="Autorob-text flex justify-center items-center flex-wrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to AutoRob
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Justifying 'T' in HBTU
      </motion.p>
    </header>
  );
}

function ClubActivities() {
  const activities = [
    {
      name: "Workshops",
      icon: <FaLightbulb size={50} className="text-yellow-400 mx-auto" />,
    },
    {
      name: "Competitions",
      icon: <FaTrophy size={50} className="text-red-400 mx-auto" />,
    },
    {
      name: "Projects",
      icon: <FaTools size={50} className="text-green-400 mx-auto" />,
    },
  ];

  return (
    <section className=" relative pt-[48px] pb-[30px] text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Club Activities</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {activities.map((activity, index) => (
          <Card
            key={index}
            className="bg-gray-800 card p-8 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300"
          >
            <CardContent className="text-center">
              {activity.icon}
              <h3 className="text-2xl font-semibold text-blue-300 mt-4">
                {activity.name}
              </h3>
              <p className="text-gray-400 mt-2">
                Exciting hands-on experiences for members.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


function MemberSection() {
  const teamsData = [
    {
      team: "Final Year",
      members: [
        {
          name: "Pragya",
          role: "President",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Namo",
          role: "Vice President",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
      ],
    },
    {
      team: "Third Year",
      members: [
        {
          name: "Arnav",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Ayush",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Akshat",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Rishabh",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Shaivi",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Deepak",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Akshat",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Rishabh",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Akshat",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Rishabh",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
      

      ],


      
    },
    {
      team: "Second Year",
      members: [
        {
          name: "Abhishek",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Nishant",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Vanshika",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Nishtha",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Bhoomi",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Swati",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Kartik",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Satvik",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Pushkin",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Ayushi",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Harsh",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Yuvraj",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Vipranshu",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Rahul",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "khushi",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Vaibhav",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Ashwani",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
        {
          name: "Isha",
          role: "Head",
          icon: <FaUser size={50} className="text-blue-400 mx-auto" />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          Meet Our Members
        </h2>
      </div>

      {teamsData.map((teamObj, index) => (
        <section key={index} className="relative z-1 py-8 text-center">
           <div className="final flex justify-center items-center flex-wrap ">
            <h2 className="text-5xl font-bold mt-[7rem] z-1 relative text-indigo-300">
              {teamObj.team}
            </h2>
          </div>
          <div className="member grid md:grid-cols-6 gap-0 px-[5px] mr-8">
            {teamObj.members.map((member, idx) => (
              <Card
                key={idx}
                className="member_card flex justify-center items-center w-[125px] h-[125px] rounded-full bg-gray-800 shadow-lg hover:shadow-blue-400 transition duration-300 mb-[80px]"
              >
                <CardContent className="cardcontent text-center ">
                  {member.icon}
                  <h3 className="text-2xl text-center font-semibold text-blue-300 mt-12 pt-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
         
        </section>
      ))}
    </>
  );
}


function Footer() {
  return (
    <footer className="h-fit relative bg-gradient-to-r from-blue-900 via-gray-900 to-black pt-[20px] pb-[20px] text-center mt-12">
      <h3 className="text-3xl font-bold text-blue-400">Contact Us</h3>
      <p className="text-gray-400 text-lg mt-2">
        Stay connected with us on social media
      </p>
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="https://www.instagram.com/autorob_hbtu/"
          className="text-blue-400 hover:text-white text-4xl transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/autorob_hbtu/"
          className="text-pink-400 hover:text-white text-4xl transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        © 2025 AutoRob Club. All rights reserved.
      </p>
    </footer>
  );
}

export default function AutoRobClub() {
  const [isopen, setisopen] = useState(false);
  const mouseclick = () => {
    setisopen(!isopen);
  };

  const cursor = useRef(null);
  const [position, setposition] = useState({ x: 0, y: 0 });
  const MouseEvent = (e) => {
    setposition({ x: e.clientX, y: e.clientY });
    cursor.current.style.left = `${e.clientX}px`;
    cursor.current.style.top = `${e.clientY}px`;
  };

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
          <li>
            <a
              href="#"
              className="hover:text-blue-400 inline-block  hover:scale-125"
            >
              Library
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 inline-block hover:scale-125"
            >
              Login
            </a>
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
