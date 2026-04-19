import React, { use } from "react";
import MyContainer from "../Shared/MyContainer";
import AppCard from "@/ui/AppCard";
import Link from "next/link";

const appsPromise = fetch("http://localhost:3000/data.json", {
  cache: "no-store",
}).then((res) => res.json());

const TrendingApps = () => {
  const allApps = use(appsPromise);
  return (
    <div className="py-20 bg-[#F1F5E8]">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001931]">
            Trending Apps
          </h2>
          <p className="text-[#627382] mt-4 pb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allApps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/apps"
            className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
          >
            Show All
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default TrendingApps;
