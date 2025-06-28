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
          { name: "Pragya", src:"", role: "President" },
        
          { name: "Namo",src:"",  role: "Vice President" },
          { name: "Namo",src:"",  role: "Vice President" },
          { name: "Namo",src:"",  role: "Vice President" },
          { name: "Namo",src:"",  role: "Vice President" },
        ],
      },
      {
        team: "Third Year",
        members: [
          { name: "Arnav",src:"",  role: "Head" },
          { name: "Ayush",src:"",  role: "Head" },
          { name: "Akshat",src:"",  role: "Head" },
          { name: "Rishabh",src:"",  role: "Head" },
          { name: "Shaivi",src:"",  role: "Head" },
          { name: "Deepak",src:"",  role: "Head" },
          { name: "Akshat",src:"",  role: "Head" },
          { name: "Rishabh",src:"",  role: "Head" },
          { name: "Akshat", src:"", role: "Head" },
          { name: "Rishabh",src:"",  role: "Head" },
        ],
      },
      {
        team: "Second Year",
        members: [
          { name: "Abhishek",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751139733/admin-profiles/vcmckprvqvae2j5gdvgb.jpg",  role: "Hardware" },
          { name: "Nishant",src:"",  role: "Hardware" },
          { name: "Vanshika",src:"",  role: "Hardware" },
          { name: "Nishtha",src:"",  role: "Head" },
          { name: "Bhoomi",src:"",  role: "Head" },
          { name: "Swati",src:"",  role: "Software" },
          { name: "Kartik",src:"",  role: "Head" },
          { name: "Satvik",src:"",  role: "Head" },
          { name: "Pushkin",src:"",  role: "Head" },
          { name: "Ayushi",src:"",  role: "Head" },
          { name: "Harsh",src:"",  role: "Head" },
          { name: "Yuvraj",src:"",  role: "Head" },
          { name: "Vipranshu",src:"",  role: "Head" },
          { name: "Rahul",src:"",  role: "Head" },
          { name: "khushi",src:"",  role: "Head" },
          { name: "Vaibhav",src:"",  role: "Head" },
          { name: "Ashwani",src:"",  role: "Head" },
          { name: "Isha",src:"",  role: "Head" },
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
        }); 

        return (
          <section
            key={index}
            className="relative z-1 py-8 text-center"
            ref={ref}
          >
            {" "}
            
            <div className="final flex justify-center items-center flex-wrap mb-4 ">
              <h2 className="text-5xl font-bold mt-[7rem] z-1 relative text-indigo-300">
                {teamObj.team}
              </h2>
            </div>
            {inView ? (
              <div className="member grid md:grid-cols-6 md:w-fit px-[5px] mr-8 md:gap-4 gap-2 justify-items-center">
                {teamObj.members.map((member, idx) => (
                  <div className="mb-[10px]">
                    <Card
                      key={idx}
                      className=" p-0 member_card m-0    rounded-full shadow-lg hover:shadow-blue-400 transition duration-300 mb-4"
                    >
                       <img
                       
                          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                          srcSet={member.src}
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
