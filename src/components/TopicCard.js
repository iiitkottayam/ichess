import React from "react";
import "../assets/styles/TopicCard.css";

const TopicCard = (prop) => {
  return (
    <div className="flip-card w-10/12 h-36 text-black" id="topics">
      <div className="flip-card-inner">
        <div className="flip-card-front p-2 flex bg-green-400 items-center justify-center">
          <p className="text-3xl font-extrabold">{prop.title}</p>
        </div>
        <div className="flip-card-back p-2 bg-green-400">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
