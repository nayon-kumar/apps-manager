"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { MyContext } from "@/context/AppsContext";
import InstalledAppCard from "@/ui/InstalledAppCard";
import React, { useContext, useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";

const Installation = () => {
  const { apps, setApps } = useContext(MyContext);
  const [filter, setFilter] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    let sorted = [...apps];
    if (filter === "low-to-high") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (filter === "hight-to-low") {
      sorted.sort((a, b) => b.size - a.size);
    }
    setFilteredApps(sorted);
  }, [filter, apps]);

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
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <p className="font-semibold text-[#001931] text-xl md:text-2xl">
              ({apps.length}) Apps Found
            </p>
            <div className="w-45">
              <select defaultValue="Sort By" className="select select-neutral">
                <option disabled={true}>Sort By</option>
                <option onClick={() => setFilter("")}>Default</option>
                <option onClick={() => setFilter("low-to-high")}>
                  Size: Low to High
                </option>
                <option onClick={() => setFilter("hight-to-low")}>
                  Size: High to Low
                </option>
              </select>
            </div>
          </div>

          {apps.length > 0 ? (
            <>
              {filter === "" ? (
                <>
                  <div className="mt-6 flex flex-col gap-4">
                    {apps.map((app) => (
                      <InstalledAppCard key={app.id} app={app} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-6 flex flex-col gap-4">
                    {filteredApps.map((app) => (
                      <InstalledAppCard key={app.id} app={app} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="mt-10 text-gray-500 flex flex-col items-center justify-center">
                <CiFileOn size={140} />
                <p className="mt-4">No intalled apps found!</p>
              </div>
            </>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Installation;
