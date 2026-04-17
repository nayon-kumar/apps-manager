import React from "react";
import MyContainer from "../Shared/MyContainer";

const Status = () => {
  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] ">
      <MyContainer className="p-20">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
          Trusted by Millions, Built for You
        </h3>
        <div className="mt-10 flex flex-wrap items-center gap-6 justify-around">
          <div className="text-center">
            <p className="text-white/80">Total Downloads</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold my-4">
              29.6M
            </h3>
            <p className="text-white/80">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-white/80">Total Downloads</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold my-4">
              29.6M
            </h3>
            <p className="text-white/80">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-white/80">Total Downloads</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold my-4">
              29.6M
            </h3>
            <p className="text-white/80">21% more than last month</p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Status;
