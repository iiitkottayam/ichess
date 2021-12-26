import React from "react";

const ImportantDatesTile = () => {
  return (
    <div className="w-full text-black p-5 sm:p-10 bg-white text-xl sm:text-3xl space-y-2">
      <p className="text-3xl pb-3 sm:text-5xl font-extrabold ">
        Important Dates
      </p>
      <div className="flex w-full place-content-center ">
        <p className="w-7/12 bg-black text-white p-3">
          Submission of Full paper Deadline
        </p>
        <p className="bg-green-400 p-3 text-black font-extrabold w-5/12">
          31 May 2022
        </p>
      </div>
      <div className="flex w-full place-content-center">
        <p className="w-7/12 bg-black text-white p-3">
          Notification of Paper acceptance submission
        </p>
        <p className="bg-green-400 p-3 text-black font-extrabold w-5/12 ">
          05 August 2022
        </p>
      </div>
      <div className="flex w-full place-content-center">
        <p className="w-7/12 bg-black text-white p-3">Registration deadline</p>
        <p className="bg-green-400 p-3 text-black font-extrabold w-5/12 ">
          10 August 2022
        </p>
      </div>
      <div className="flex w-full place-content-center">
        <p className="w-7/12 bg-black text-white p-3">
          Deadline to upload Recorded video presentation
        </p>
        <p className="bg-green-400 p-3 text-black font-extrabold w-5/12 ">
          30 August 2022
        </p>
      </div>
      <div className="flex w-full place-content-center">
        <p className="w-7/12 bg-black text-white p-3">Conference dates</p>
        <p className="bg-green-400 p-3 text-black font-extrabold w-5/12 ">
          15 September 2022
        </p>
      </div>
    </div>
  );
};

export default ImportantDatesTile;
