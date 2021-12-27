import React from "react";
import TopicCard from "./TopicCard";

const TopicsTile = () => {
  return (
    <div className="w-full p-5 py-10 sm:p-10 bg-black text-green-400 topics-bg">
      <p className=" font-extrabold text-3xl sm:text-5xl py-5"> Topics</p>
      <div className="w-full grid sm:grid-cols-3 grid-flow-row sm:grid-flow-row gap-7 justify-items-center sm:justify-items-start">
        <TopicCard title="Cyber Security" />
        <TopicCard title="Embedded System Security" />
        <TopicCard title="Communication and Networking Security" />
        <TopicCard title="Computational Intelligence" />
        <TopicCard title="IoT Security" />
        <TopicCard title="Lightweight Cryptography" />
        <TopicCard title="Security and Privacy" />
      </div>
    </div>
  );
};

export default TopicsTile;
