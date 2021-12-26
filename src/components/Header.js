import React from "react";
import "../assets/styles/animation.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div
      id="home"
      className="w-full h-screen space-y-7  sm:space-y-6 text-fade-in bg-black text-white sm:text-center px-5 sm:px-10 pb-20 sm:pb-0 pt-32 sm:pt-40 header"
    >
      <p className="text-xl sm:text-2xl  font-semibold ">
        IEEE International Conference on
      </p>
      <p className=" text-xl sm:text-2xl font-semibold">
        Communication, Hardware and Embedded systems security
      </p>
      <p className="text-5xl sm:text-8xl xl:text-9xl font-bold sm:font-extrabold  text-green-400">
        i-CHESS 2022
      </p>
      <p className="mt-2 text-lg sm:text-xl">
        September 16,17 2022 | Indian Institute of Information Technology
        Kottayam
      </p>
      <Link to="info" smooth={true} duration={1000} offset={-100}>
        <button className="bg-green-400 text-black p-3 font-extrabold rounded-t-xl rounded-l-xl mt-5 text-xl sm:text-2xl hover:bg-white ">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default Header;
