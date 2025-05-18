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
import { useInView } from "react-intersection-observer";
import { useState, useRef, useMemo } from "react";
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
  const teamsData = useMemo(
    () => [
      {
        team: "Final Year",
        members: [
          { name: "Pragya", role: "President" },
          { name: "Namo", role: "Vice President" },
        ],
      },
      {
        team: "Third Year",
        members: [
          { name: "Arnav", role: "Head" },
          { name: "Ayush", role: "Head" },
          { name: "Akshat", role: "Head" },
          { name: "Rishabh", role: "Head" },
          { name: "Shaivi", role: "Head" },
          { name: "Deepak", role: "Head" },
          { name: "Akshat", role: "Head" },
          { name: "Rishabh", role: "Head" },
          { name: "Akshat", role: "Head" },
          { name: "Rishabh", role: "Head" },
        ],
      },
      {
        team: "Second Year",
        members: [
          { name: "Abhishek", role: "Head" },
          { name: "Nishant", role: "Head" },
          { name: "Vanshika", role: "Head" },
          { name: "Nishtha", role: "Head" },
          { name: "Bhoomi", role: "Head" },
          { name: "Swati", role: "Head" },
          { name: "Kartik", role: "Head" },
          { name: "Satvik", role: "Head" },
          { name: "Pushkin", role: "Head" },
          { name: "Ayushi", role: "Head" },
          { name: "Harsh", role: "Head" },
          { name: "Yuvraj", role: "Head" },
          { name: "Vipranshu", role: "Head" },
          { name: "Rahul", role: "Head" },
          { name: "khushi", role: "Head" },
          { name: "Vaibhav", role: "Head" },
          { name: "Ashwani", role: "Head" },
          { name: "Isha", role: "Head" },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          Meet Our Members
        </h2>
      </div>

      {teamsData.map((teamObj, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // ✅ LAZY LOADING OPTIMIZATION

        return (
          <section key={index} className="relative z-1 py-8 text-center" ref={ref}> {/* ✅ ADDED ref FOR INTERSECTION OBSERVER */}
            <div className="final flex justify-center items-center flex-wrap ">
              <h2 className="text-5xl font-bold mt-[7rem] z-1 relative text-indigo-300">
                {teamObj.team}
              </h2>
            </div>
            {inView ? (
              <div className="member grid md:grid-cols-6 gap-0 px-[5px] mr-8">
                {teamObj.members.map((member, idx) => (
                  <Card
                    key={idx}
                    className="member_card flex justify-center items-center w-[125px] h-[125px] rounded-full bg-gray-800 shadow-lg hover:shadow-blue-400 transition duration-300 mb-[80px]"
                  >
                    <CardContent className="cardcontent text-center ">
                      <FaUser size={50} className="text-blue-400 mx-auto" /> {/* ✅ MOVED ICON HERE FOR CONSISTENCY */}
                      <h3 className="text-2xl text-center font-semibold text-blue-300 mt-12 pt-2">
                        {member.name}
                      </h3>
                      <p className="text-gray-400">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="h-[300px] flex justify-center items-center">
                <p className="text-gray-400">Loading members...</p>
              </div>
            )}
          </section>
        );
      })}
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
          href="https://www.linkedin.com/company/autorob-club-hbtu-kanpur/posts/?feedView=all"
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