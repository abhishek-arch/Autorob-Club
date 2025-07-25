import React from "react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/card";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import { FaUser } from "react-icons/fa"; // ✅ IMPORTED ICONS FROM REACT-ICONS
// import {faUser,} from "react-icons/fa";
import AutoRobClublogo from "../assets/images/Autoroblogo.png";
import test from "../assets/images/test.png"
import axios from "axios";


function MemberSection() {

// useEffect(() => {
//   const fetchdata = async()=>{
//   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile/`)

//  if(response.status==200){
//   const data = response.data.profile
//   console.log(data)
//  }


// }

// fetchdata()


 
// }, [])




  const teamsData = useMemo(
    () => [
      {
        team: "Pass Out",
        members: [
          { name: "Pragya", src:"", role: "former President" },
        
          { name: "Namo",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752117791/admin-profiles/zumc2itdjyxbldybh7fg.jpg",  role: "former VicePresident" },
          { name: "Uday",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752086451/admin-profiles/sluaovm6dzku1wefe7fq.jpg",  role: " former Member" },
        
        ],
      },
      {
        team: "Final Year",
        members: [
          { name: "Deepak",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1753541636/admin-profiles/ahclpwgcz1qvoovwrt6m.jpg",  role: "President" },
          { name: "Shaivi",src:"",  role: "Vice President" },
          { name: "Ayush",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751467611/user-profiles/icpql5nzfm1nzriearvq.jpg",  role: "Vice President" },
          { name: "Akshat",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752044841/user-profiles/uaymjnueek15xur4lozw.jpg",  role: "Vice President" },
          { name: "Arnav",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752240432/admin-profiles/sczw7uyrmwnpz5wgx0gf.jpg",  role: "Secretary" },
          { name: "Rishabh",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751533369/admin-profiles/clhrxfh4hu29pboelxuz.jpg",  role: "Secretary" },
          { name: "Ashutosh",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752135737/admin-profiles/eohrilmmn85xeyukb4nw.jpg",  role: "Secretary" },
          { name: "Deepika",src:"",  role: "Secretary" },
          { name: "Abhishek",src:"",  role: "Secretary" },
          { name: "Hanshika",src:"",  role: "Secretary" },
          
         
          
         
        ],
      },
      {
        team: "Third Year",
        members: [
          { name: "Abhishek",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751139733/admin-profiles/vcmckprvqvae2j5gdvgb.jpg",  role: "Software" },
          
          { name: "Vanshika",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752047649/admin-profiles/bm07eiwdhoakpmhkyjbh.jpg",  role: "Hardware" },
          { name: "Ishita",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752165339/admin-profiles/cehma1dxtb7kkaoi5prp.png",  role: "Head" },
          { name: "Bhoomi",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752048738/admin-profiles/kkgnkn2abioqp53b3jrd.jpg",  role: "Head" },
          { name: "Swati",src:"",  role: "Software" },
          { name: "Kartikey",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752044023/user-profiles/ywajcf8oy7z25spptp8s.jpg",  role: "Hardware" },
          { name: "Priyanshu",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751737630/admin-profiles/wfuqzxkqibsvtgnvyvkg.jpg",  role: "Head" },
          { name: "Shubh",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752046450/admin-profiles/a0tly955w2xxedp1f5h5.jpg",  role: "Head" },
          { name: "Asheesh",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751768085/admin-profiles/ejiitqqvqpvgp6wusdfx.jpg",  role: "Head" },
          { name: "Harsh",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751736781/admin-profiles/ozwsdf5c51gckdhudo61.webp",  role: "Head" },
          { name: "Yuvraj",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751784776/admin-profiles/nhdcncuivdtj7zif9gfv.jpg",  role: "Hardware" },
          { name: "Aditya",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752045362/admin-profiles/eoc93hiospu773n2i0uw.jpg",  role: "Event&PR" },
          { name: "Mayank",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752051444/admin-profiles/wcesfuzebnvdaoficppq.jpg",  role: "Software" },
          { name: "Aryan",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1751739334/admin-profiles/avpajgvsgoq9qybaj0k5.jpg",  role: "Session" },
          { name: "Vipranshu",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752053286/admin-profiles/ugpkc2t4o7equynlsgy0.jpg",  role: "Treasurer" },
          { name: "Shivam",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752043668/admin-profiles/rjpihvh9kjqeljmsoyp8.jpg",  role: "Head" },
          { name: "Pranjul",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752053036/admin-profiles/uhjebezknbaekw11gcqe.jpg",  role: "Head" },
          { name: "Kush",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752059201/admin-profiles/awdty7mn7jca8ak8fcbo.webp",  role: "Design" },
          { name: "Sudhir",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752060101/admin-profiles/zqwx62vglgjgvjdjpxgw.jpg",  role: "Design" },
          { name: "Mayank",src:"https://res.cloudinary.com/dxxnjkezo/image/upload/v1752300793/admin-profiles/tkl0kteltami7eqrwd83.png",  role: "Design" },
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
                     <CardContent className="cardcontent text-center  ">
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
