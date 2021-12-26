import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <div className="w-full h-20 bg-black  flex text-white absolute top-0 z-50 border-b-2 border-solid border-green-400">
      <p className="font-extrabold pl-10 py-4 text-2xl self-center">iChess</p>
      <ul className="flex w-full py-4 pr-10 self-center justify-end">
        <Link to="home" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer hover:text-green-400">Home</li>
        </Link>
        {/* info tile */}

        {/* Topics  */}
        <Link to="topics" smooth={true} duration={1000} offset={-180}>
          <li className="px-2 cursor-pointer hover:text-green-400">Topics</li>
        </Link>

        {/* call for papers  */}
        <Link to="authors" smooth={true} duration={1000} offset={-100}>
          <li className="px-2 cursor-pointer hover:text-green-400">Authors</li>
        </Link>

        {/* footer  */}
        <Link to="footer" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer hover:text-green-400">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
