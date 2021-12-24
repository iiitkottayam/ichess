import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-screen bg-black text-white text-center pt-56 header">
      <p className="text-8xl font-bold ">i-CHESS 2022</p>
      <p className="text-2xl mt-2 font-semibold">
        IEEE International Conference on
      </p>
      <p className="text-2xl font-semibold">
        Communication, Hardware and Embedded systems security
      </p>
      <p className="mt-2 text-xl">
        September 16,17 2022 | Indian Institute of Information Technology
        Kottayam
      </p>
      <button className="bg-green-400 text-black p-3 rounded-t-xl rounded-l-xl mt-3 text-2xl font-bold">
        Learn More
      </button>
    </div>
  );
};

export default Header;
