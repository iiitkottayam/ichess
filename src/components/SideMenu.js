import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const SideMenu = (props) => {
  const closeMenu = () => {
    props.setmenuOpen(false);
  };
  return (
    <div className="w-screen h-screen bg-green-400 text-black overflow-hidden absolute top-0 left-0">
      <MdClose
        className="absolute top-0 right-0 m-5 text-5xl text-black"
        onClick={closeMenu}
      />
      <ul className="flex-col w-full text-black font-extrabold mt-10 text-6xl p-10 text-center">
        <Link to="home" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer my-10 " onClick={closeMenu}>
            Home
          </li>
        </Link>
        <Link to="topics" smooth={true} duration={1000} offset={-180}>
          <li className="px-2 cursor-pointer my-10 " onClick={closeMenu}>
            Topics
          </li>
        </Link>
        <Link to="authors" smooth={true} duration={1000} offset={-100}>
          <li className="px-2 cursor-pointer my-10 " onClick={closeMenu}>
            Authors
          </li>
        </Link>
        <Link to="footer" smooth={true} duration={1000}>
          <li className="px-2 cursor-pointer my-10 " onClick={closeMenu}>
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideMenu;
