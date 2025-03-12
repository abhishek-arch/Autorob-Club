import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "./Navbar";
import { FaBars, FaLinkedin, FaInstagram, FaTrophy, FaLightbulb, FaTools, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState , useRef } from "react";
import './index.css';
import './App.css';
import Cross from "./Cross.svg";
// function Navbar({ menuOpen, setMenuOpen }) {
//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold tracking-wide text-blue-400">AutoRob Club</h1>
//       <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//         <FaBars size={28} />
//       </button>
//       <ul className={`md:flex gap-6 text-lg font-semibold ${menuOpen ? "block" : "hidden"} md:block`}>
//         <li><a href="#" className="hover:text-blue-400">Home</a></li>
//         <li><a href="#" className="hover:text-blue-400">Library</a></li>
//         <li><a href="#" className="hover:text-blue-400">Sign In</a></li>
//         <li><a href="#" className="hover:text-blue-400">Login</a></li>
//       </ul>
//     </nav>
//   );
// }

function Header() {
  return (
    <header className="relative  flex flex-col justify-center items-center text-center flex-wrap">
      <motion.h1 className="Autorob-text flex justify-center items-center flex-wrap" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Welcome to AutoRob</motion.h1>
      <motion.p className="mt-4 text-xl text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>Justifying 'T' in HBTU</motion.p>
    </header>
  );
}

function ClubActivities() {
  const activities = [
    { name: "Workshops", icon: <FaLightbulb size={50} className="text-yellow-400 mx-auto" /> },
    { name: "Competitions", icon: <FaTrophy size={50} className="text-red-400 mx-auto" /> },
    { name: "Projects", icon: <FaTools size={50} className="text-green-400 mx-auto" /> }
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Club Activities</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {activities.map((activity, index) => (
          <Card key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300">
            <CardContent className="text-center">
              {activity.icon}
              <h3 className="text-2xl font-semibold text-blue-300 mt-4">{activity.name}</h3>
              <p className="text-gray-400 mt-2">Exciting hands-on experiences for members.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function MemberSection() {
  const members = [
    { name: "Pragya", role: "President", img: "https://via.placeholder.com/150" },
    { name: "Namo", role: "Vice President", img: "https://via.placeholder.com/150" },
    { name: "Arnav", role: "Head", img: "https://via.placeholder.com/150" }
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Meet Our Members</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {members.map((member, index) => (
          <Card key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300">
            <CardContent className="text-center">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 transition transform hover:scale-110" />
              <h3 className="text-2xl font-semibold text-blue-300 mt-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-black py-12 text-center mt-12">
      <h3 className="text-3xl font-bold text-blue-400">Contact Us</h3>
      <p className="text-gray-400 text-lg mt-2">Stay connected with us on social media</p>
      <div className="flex justify-center gap-8 mt-6">
        <a href="https://www.instagram.com/autorob_hbtu/" className="text-blue-400 hover:text-white text-4xl transition duration-300"><FaLinkedin /></a>
        <a href="https://www.instagram.com/autorob_hbtu/" className="text-pink-400 hover:text-white text-4xl transition duration-300"><FaInstagram /></a>
      </div>
      <p className="text-gray-500 text-sm mt-8">© 2025 AutoRob Club. All rights reserved.</p>
    </footer>
  );
}

export default function AutoRobClub() {
  const [isopen, setisopen] = useState(false);
  const mouseclick = () => {
    setisopen(!isopen)
      
  } ;

  const cursor = useRef(null);
  const [position, setposition] = useState({ x: 0, y: 0 });
  const MouseEvent = (e) => {
    setposition({ x: e.clientX, y: e.clientY });
    cursor.current.style.left = `${e.clientX}px`;
    cursor.current.style.top = `${e.clientY}px`;
  };
  document.addEventListener("mousemove", MouseEvent);



  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
       <div
        className={`floating_bar ${
          isopen ? "open" : ""
        } border-2 border-black float-right  w-80 h-screen`}
      >
        <ul className="flex  justify-end gap-10 p-2 items-center flex-col text-white cursor-pointer text-lg font-semibold">
          <div className="home_cross flex">
            <li className=""><a href="#" className="hover:text-blue-400 inline-block  hover:scale-125">Home</a></li>
            <img className='invert fixed right-0 cursor-pointer' src = {Cross} alt="" onClick={mouseclick}/>
          </div>
        <li><a href="#" className="hover:text-blue-400 inline-block  hover:scale-125">Library</a></li>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Sign In</a></li>
        <li><a href="#" className="hover:text-blue-400 inline-block hover:scale-125">Login</a></li>
        </ul> 
      </div>
     <Navbar isopen={isopen} setisopen={setisopen} />
     <div className="cursor border-2" ref={cursor} onMouseMove={MouseEvent}></div>

      <Header />
      <ClubActivities />
      <MemberSection />
      <Footer />
    </div>
  );
}
