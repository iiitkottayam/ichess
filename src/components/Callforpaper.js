import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TrackCard from "./TrackCard";
import trackdata from "../assets/data/trackdata.json";
const Callforpaper = () => {
  return (
    <div className="w-full p-10">
      <p className="text-3xl sm:text-5xl font-extrabold">Call for papers</p>
      <Carousel
        className="w-11/12 h-auto bg-black items-center m-auto mt-10"
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        stopOnHover={true}
      >
        {trackdata.map((data) => {
          return <TrackCard id={data.id} title={data.title} disc={data.disc} />;
        })}
      </Carousel>
    </div>
  );
};

export default Callforpaper;
