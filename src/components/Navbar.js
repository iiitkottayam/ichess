import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black  flex text-white absolute top-0 opacity-90 z-50 border-b-2 border-solid border-green-400">
      <p className="font-extrabold pl-10 py-4 text-2xl self-center">iChess</p>
      <ul className="flex w-full py-4 pr-10 self-center justify-end">
        <li className="px-2 cursor-pointer hover:text-green-400">Home</li>
        <li className="px-2 cursor-pointer hover:text-green-400">Schedule</li>
      </ul>
    </div>
  );
};

export default Navbar;
