import MyContainer from "@/components/Shared/MyContainer";
import AppCard from "@/ui/AppCard";
import React, { use } from "react";

const appsPromise = fetch("https://apps-manager-eta.vercel.app/data.json", {
  cache: "no-store",
}).then((res) => res.json());

const AppsPage = () => {
  const allApps = use(appsPromise);
  return (
    <div className="pt-40 bg-[#F1F5E8]">
      <MyContainer>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001931]">
            Our All Applications
          </h2>
          <p className="mt-4 text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="pb-20">
          <h3 className="font-semibold text-[#001931] mt-10 text-xl md:text-2xl">
            ({allApps.length}) Apps Found
          </h3>
          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AppsPage;
