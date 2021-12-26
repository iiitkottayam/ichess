import React from "react";
import "../assets/styles/TopicCard.css";

const TopicCard = (prop) => {
  return (
    <div className="flip-card w-full h-36 text-black" id="topics">
      <div className="flip-card-inner">
        <div className="flip-card-front p-5 flex bg-green-400 items-center justify-center">
          <p className="text-3xl sm:text-2xl font-extrabold">{prop.title}</p>
        </div>
        <div className="flip-card-back p-5 bg-green-400">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
