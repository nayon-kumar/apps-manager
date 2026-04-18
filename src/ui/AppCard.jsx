import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const AppCard = ({ app }) => {
  return (
    <Link
      href="/"
      className="bg-white p-4 rounded-sm border border-gray-300 shadow hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      <Image
        src={app.image}
        alt={app.title}
        height={200}
        width={300}
        className="rounded-xl mx-auto h-50 w-auto"
      />
      <h3 className="font-medium text-xl text-[#001931] my-4">{app.title}</h3>
      <div className="flex items-center justify-between">
        <div className="text-[#00D390] flex items-center gap-2 font-medium bg-[#F1F5E8] px-2.5 py-1.5 rounded-sm">
          <LuDownload />
          <p>{app.downloads}</p>
        </div>
        <div className="text-[#FF8811] flex items-center gap-2 font-medium bg-[#FFF0E1] px-2.5 py-1.5 rounded-sm">
          <FaStar />
          <p>{app.ratingAvg}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
