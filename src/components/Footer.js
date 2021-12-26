import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import mapiiit from "../assets/images/mapiiit.png";
import "../assets/styles/Map.css";
const Footer = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-full bg-green-400 text-center text-black " id="footer">
      {/* contact us part of footer  */}
      <div className="w-full bg-white flex-col p-10">
        {/* contact us */}
        <p className="font-bold ">CONTACT US</p>
        {/* Green line */}
        <div className="h-1 w-1/12 bg-green-400 m-auto mt-2"> </div>
        {/* Emails section */}
        <div className="grid grid-rows-1 sm:grid-flow-col mt-5 ">
          <div className="py-5 sm:py-0">
            <AiOutlineMail className="m-auto text-4xl" />
            <p>xyz@iiitkottayam.ac.in</p>
          </div>
          <div className="py-5 sm:py-0">
            <AiOutlineMail className="m-auto text-4xl" />
            <p>xyz@iiitkottayam.ac.in</p>
          </div>
          <div className="py-5 sm:py-0">
            <AiOutlineMail className="m-auto text-4xl" />
            <p>xyz@iiitkottayam.ac.in</p>
          </div>
        </div>
      </div>
      {/* map comes here */}
      <div className="map-container">
        <img
          src={mapiiit}
          alt="Map Location - IIIT Kottayam"
          className="image-map"
        ></img>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology+(IIIT)+Kottayam/@9.7440374,76.6497433,13.09z/data=!4m9!1m2!2m1!1siiit+kottayam!3m5!1s0x3b07ce23bc170053:0x8757971e61eb21dd!8m2!3d9.7551464!4d76.6500117!15sCg1paWl0IGtvdHRheWFtkgEKdW5pdmVyc2l0eQ"
        >
          <button
            className="map-button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown && "View on Map"}
          </button>
        </a>
      </div>
      {/* credits */}
      <div className="w-full grid grid-rows-1 sm:grid-flow-col justify-items-center items-center p-10 font-semibold">
        {/* left side  */}
        <div className="pb-10 sm:pb-0">
          <p>Copyright</p>
        </div>
        {/* right side  */}
        <div className="flex space-x-5 pt-10 sm:pl-16 sm:pt-0 text-2xl border-t-2  sm:border-l-4 sm:border-t-0 border-solid border-black">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
