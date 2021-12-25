import React from "react";

const WhenWhere = () => {
  return (
    <div className="w-full h-max sm:flex">
      <div className="sm:w-2/5 items-start text-black bg-green-400  space-y-3 pt-10 pl-10 pb-10">
        <p className="text-3xl sm:text-5xl font-bold ">When?</p>
        <p className="text-lg sm:text-2xl font-semibold">
          16-17 September 2021
        </p>
      </div>
      <div className="sm:w-3/5 justify-self-end bg-black pb-3 text-right text-green-400 pt-10 pr-10 pb-10 ">
        <p className="text-3xl sm:text-5xl font-bold ">Where?</p>
        <p className="text-lg sm:text-2xl font-semibold">
          Indian Institute of Information Technology,
        </p>
        <p className="text-2xl font-semibold">Kottayam</p>
      </div>
    </div>
  );
};

export default WhenWhere;
