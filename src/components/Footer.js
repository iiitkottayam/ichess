import React from "react";
import {
  AiOutlineMail,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
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
      <div></div>
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
