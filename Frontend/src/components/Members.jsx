import React from "react";
import { Card, CardContent } from "@/components/card";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import { FaUser } from "react-icons/fa"; // ✅ IMPORTED ICONS FROM REACT-ICONS
// import {faUser,} from "react-icons/fa";
import AutoRobClublogo from "../assets/images/Autoroblogo.png";
import test from "../assets/images/test.png"

function MemberSection() {
  const teamsData = useMemo(
    () => [
      {
        team: "Final Year",
        members: [
          { name: "Pragya", role: "President" },
          { name: "Namo", role: "Vice President" },
          { name: "Namo", role: "Vice President" },
          { name: "Namo", role: "Vice President" },
          { name: "Namo", role: "Vice President" },
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
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        }); // ✅ LAZY LOADING OPTIMIZATION

        return (
          <section
            key={index}
            className="relative z-1 py-8 text-center"
            ref={ref}
          >
            {" "}
            {/* ✅ ADDED ref FOR INTERSECTION OBSERVER */}
            <div className="final flex justify-center items-center flex-wrap mb-4 ">
              <h2 className="text-5xl font-bold mt-[7rem] z-1 relative text-indigo-300">
                {teamObj.team}
              </h2>
            </div>
            {inView ? (
              <div className="member grid md:grid-cols-6  px-[5px] mr-8">
                {teamObj.members.map((member, idx) => (
                  <div className="mb-[10px]">
                    <Card
                      key={idx}
                      className=" p-0 member_card m-0   w-[6rem] h-[6rem] rounded-full bg-gray-800 shadow-lg hover:shadow-blue-400 transition duration-300 mb-4"
                    >
                       <img
                          className="w-full h-full  rounded-full object-cover"
                          src={FaUser}
                          alt=""
                        />
                     
                    </Card>
                     <CardContent className="cardcontent text-center ">
                        {/* <FaUser size={50} className="text-blue-400 mx-auto" />  */}
                       

                        <h3 className="text-2xl text-center font-semibold text-blue-300  ">
                          {member.name}
                        </h3>
                        <p className="text-gray-400">{member.role}</p>
                      </CardContent>
                  </div>
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

export default MemberSection;
