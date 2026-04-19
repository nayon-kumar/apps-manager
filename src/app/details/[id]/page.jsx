"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { MyContext } from "@/context/AppsContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { use, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";

const appsPromise = fetch("http://localhost:3000/data.json", {
  cache: "no-store",
}).then((res) => res.json());

const DetailsPage = () => {
  const { apps, setApps } = useContext(MyContext);
  const handleClick = (newApp) => {
    toast.success(`${newApp.title} Installed!`, { position: "bottom-center" });
    setApps([...apps, newApp]);
  };

  const allApps = use(appsPromise);

  const { id } = useParams();

  const expectedApp = allApps.find((app) => app.id == id);
  const isInstalled = apps.some((app) => app.id === expectedApp.id);
  const totalRating = expectedApp.ratings.reduce(
    (sum, item) => sum + item.count,
    0,
  );
  return (
    <div className="pt-40 pb-20 bg-[#F1F5E8]">
      <MyContainer>
        <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl flex items-center justify-center">
            <Image
              src={expectedApp.image}
              alt={expectedApp.title}
              height={200}
              width={300}
              className="rounded-xl h-60 w-auto"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-[#001931] font-bold text-2xl md:text-3xl">
              {expectedApp.title}
            </h3>
            <p className="mt-2 pb-7.5 border-b border-[#001931]/20 text-xl text-[#627382]">
              Developed by{" "}
              <span className="bg-linear-to-br font-semibold from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text ">
                {expectedApp.companyName}
              </span>
            </p>
            <div className="mt-7.5 flex flex-wrap items-center justify-around md:justify-normal gap-6 sm:gap-15">
              <div>
                <LuDownload size={30} className="text-[#00827A]" />
                <p className="text-[#001931]/80 my-2">Downloads</p>
                <h3 className="text-[#001931] font-extrabold text-2xl md:text-3xl">
                  {expectedApp.downloads}
                </h3>
              </div>
              <div className="text-left">
                <FaStar size={30} className="text-[#FF8811]" />
                <p className="text-[#001931]/80 my-2">Average Ratings</p>
                <h3 className="text-[#001931] font-extrabold text-2xl md:text-3xl">
                  {expectedApp.ratingAvg}
                </h3>
              </div>
              <div>
                <LuDownload size={30} className="text-[#00827A]" />
                <p className="text-[#001931]/80 my-2">Total Reviews</p>
                <h3 className="text-[#001931] font-extrabold text-2xl md:text-3xl">
                  {expectedApp.reviews}
                </h3>
              </div>
            </div>
            <button
              disabled={isInstalled}
              onClick={() => handleClick(expectedApp)}
              className={`btn text-white mt-7.5 ${isInstalled ? "" : "bg-[#00D390]"}`}
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${expectedApp.size} MB)`}
            </button>
          </div>
        </div>
        <div className="border-y my-10 py-10 border-[#001931]/20">
          <h3 className="font-semibold text-2xl text-[#001931]">Ratings</h3>
          <div className="mt-6">
            {expectedApp.ratings
              .slice()
              .reverse()
              .map((item, index) => {
                const percent = ((item.count / totalRating) * 100).toFixed(1);
                return (
                  <div key={index} className="flex items-center mb-4">
                    <div className="w-16">
                      <p className="text-[#627382] text-lg">{item.name}</p>
                    </div>
                    <div className="h-4 bg-gray-200 w-full rounded-full">
                      <div
                        className="h-4 bg-yellow-400 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex items-center justify-between">
            <p className="ml-12">0</p>
            <p>{totalRating / 4}</p>
            <p>{totalRating / 2}</p>
            <p>{totalRating}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl text-[#001931]">Description</h3>
          <p className="text-[#627382] mt-6 text-justify">
            {expectedApp.description}
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default DetailsPage;
