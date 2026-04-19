"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { MyContext } from "@/context/AppsContext";
import InstalledAppCard from "@/ui/InstalledAppCard";
import React, { useContext } from "react";

const Installation = () => {
  const { apps, setApps } = useContext(MyContext);
  console.log(apps);
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
        <div className="mt-10 pb-20">
          <p className="font-semibold text-[#001931] text-2xl">
            ({apps.length}) Apps Found
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {apps.map((app) => (
              <InstalledAppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Installation;
