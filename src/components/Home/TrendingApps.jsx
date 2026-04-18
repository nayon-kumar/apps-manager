import React, { use } from "react";
import MyContainer from "../Shared/MyContainer";
import AppCard from "@/ui/AppCard";

const appsPromise = fetch("http://localhost:3000/data.json").then((res) =>
  res.json(),
);

const TrendingApps = () => {
  const allApps = use(appsPromise);
  console.log(allApps);
  return (
    <div className="pt-20 bg-[#F1F5E8]">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001931]">
            Trending Apps
          </h2>
          <p className="text-[#627382] mt-4 pb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          {allApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default TrendingApps;
