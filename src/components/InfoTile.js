import React from "react";

const InfoTile = () => {
  return (
    <div
      id="info"
      className="w-full h-max info-tile text-white text-lg sm:text-2xl text-fade-in  p-5 sm:p-10 sm:text-center font-bold"
    >
      <div className="xl:w-2/3 m-auto py-5 sm:py-10 space-y-6">
        <p className="text-2xl sm:text-5xl font-extraboldbold text-white">
          Welcome to i-CHESS 2022
        </p>
        <p>
          i-CHESS 2022 is a premier international technical conference hosted by
          Indian Institute of Information Technology Kottayam, Kerala, India.
        </p>
        <p className="hidden sm:inline">
          The conference aims to bring together researchers, engineers,
          industrialists and practitioners who work in the area of computing,
          security, and communications to openly discuss their ideas and
          innovations. This conference is not only a platform for showcase
          information and knowledge sharing, but also to build a strong network
          among people all over the world.
        </p>
      </div>
    </div>
  );
};

export default InfoTile;
