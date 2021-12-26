import React from "react";
import { MdSecurity } from "react-icons/md";
import { BiNetworkChart, BiHealth } from "react-icons/bi";
import { GiArtificialIntelligence, GiRobotLeg } from "react-icons/gi";

const TrackCard = (props) => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-white p-10">
      <div className="w-2/3">
        <p className="text-xl sm:text-3xl font-extrabold text-green-400">
          Track {props.id}
        </p>
        <p className="text-xl sm:text-3xl font-extrabold ">{props.title}</p>
        <p className="hidden sm:inline">{props.disc}</p>
      </div>
      <div className="hidden sm:inline w-1/3 text-9xl">
        {
          {
            1: <MdSecurity className="m-auto text-green-400" />,
            2: <BiNetworkChart className="m-auto text-green-400" />,
            3: <GiArtificialIntelligence className="m-auto text-green-400" />,
            4: <GiRobotLeg className="m-auto text-green-400" />,
            5: <BiHealth className="m-auto text-green-400" />,
          }[props.id]
        }
      </div>
    </div>
  );
};

export default TrackCard;
