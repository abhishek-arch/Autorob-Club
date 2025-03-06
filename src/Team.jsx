import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <div>
      <div className="team  border-2 bg-black">Our Team</div>

      <div className="team_detail flex  justify-center flex-wrap  items-center gap-[116px]">
        <div className="president flex flex-col w-fit">
          <h1 className="w-fit">President</h1>

          <div className="img_ps   ml-2">
            <img src="" alt="" />
          </div>
        </div>
        <div className="president flex flex-col w-fit">
          <h1 className="w-fit pl-12 Head"> Head</h1>

          <div className="img_ps   ml-2">
            <img src="" alt="" />
          </div>
        </div>
        <div className="president flex flex-col">
          <h1 className="w-fit">President</h1>

          <div className="img_ps  ml-2 ">
            <img src="" alt="" />
          </div>
        </div>
        <div className="president flex flex-col ">
          <h1 className="w-fit">President</h1>

          <div className="img_ps   ml-2">
            <img src="" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
