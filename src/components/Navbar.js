import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return menuOpen ? (
    <SideMenu setmenuOpen={setmenuOpen} />
  ) : (
    <div className="w-full h-20 bg-black px-5 sm:px-10  flex justify-between items-center text-white absolute top-0 z-50 border-b-4 border-solid border-green-400">
      <p className="font-extrabold text-2xl self-center">iChess</p>
      <GiHamburgerMenu
        className="sm:hidden justify-end text-3xl"
        onClick={() => setmenuOpen(true)}
      />
      <ul className="hidden sm:flex ">
        <Link to="home" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer hover:text-green-400">Home</li>
        </Link>
        <Link to="topics" smooth={true} duration={1000} offset={-180}>
          <li className="px-2 cursor-pointer hover:text-green-400">Topics</li>
        </Link>
        <Link to="authors" smooth={true} duration={1000} offset={-100}>
          <li className="px-2 cursor-pointer hover:text-green-400">Authors</li>
        </Link>
        <Link to="footer" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer hover:text-green-400">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
