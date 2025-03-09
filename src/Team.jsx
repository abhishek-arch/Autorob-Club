import React from "react";
import "./Team.css";
import { useState, useEffect } from "react";
import Pragya from "./assets/pragya.jpeg";
import Namo from "./assets/Namo.jpeg";
import Arnav from "./assets/arnav.jpeg";




const Team = () => {

  const images = [
    {
      src: {Pragya},
      text: "Pragya",
      text2: "President",
    },
    {
      src: {Namo},
      text: "Namo",
      text2: "Vice President",
    },
    {
      src: "Arnav",
      text: "Arnav",
      text2: "Head",
  
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);






  return (
    <div>
      <div className="team">Our Team</div>

      <div className="team_detail flex  justify-center flex-wrap  items-center gap-[120px]">
        <div className="president flex flex-col w-fit">
          <h1 className="w-[372px]">{images[index].text2}</h1>

          <div className="img_ps   ml-2">
            <img key={index} className="fade" src={images[index].src} alt="" />
          </div>
          <h1 className="w-fit fade pl-[6rem]">{images[index].text}</h1>
        
        </div>
        <div className="president flex flex-col w-fit">
          <h1 className="w-fit pl-12 Head"> Head</h1>

          <div className="img_ps   ml-2">
            <img src="#" alt="" />
          </div>
          <h1 className="w-fit ">President</h1>
        </div>
        <div className="president flex flex-col">
          <h1 className="w-fit ">President</h1>

          <div className="img_ps  ml-2 ">
            <img src="" alt="" />
          </div>
          <h1 className="w-fit ">President</h1>
        </div>
        <div className="president flex flex-col ">
          <h1 className="w-fit">President</h1>

          <div className="img_ps   ml-2">
            <img src="" alt="" />
          </div>
          <h1 className="w-fit ">President</h1>
        </div>

      </div>
    </div>
  );
};

export default Team;
