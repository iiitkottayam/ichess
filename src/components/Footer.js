import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-screen bg-green-400 text-center text-black">
      <div className="w-screen bg-white flex-col">
        <p className="font-bold pt-3">CONTACT US</p>
        <div className="h-1 w-1/12 bg-green-400 m-auto"> </div>
        <div className="grid grid-rows-1">
          <div>
            <AiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
