import MyContainer from "@/components/Shared/MyContainer";
import React from "react";

const page = () => {
  return (
    <div className="pt-40 bg-[#F1F5E8]">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001931]">
            Your Installed Apps
          </h2>
          <p className="text-[#627382] mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default page;
