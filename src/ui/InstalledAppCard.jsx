import { MyContext } from "@/context/AppsContext";
import Image from "next/image";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";

const InstalledAppCard = ({ app }) => {
  const { apps, setApps } = useContext(MyContext);
  const handleClick = (deleteApp) => {
    toast.success(`${deleteApp.title} Uninstalled!`, {
      position: "bottom-center",
    });
    const filteredApps = apps.filter(
      (appSingle) => appSingle.id != deleteApp.id,
    );
    setApps(filteredApps);
  };

  return (
    <div className="flex gap-4 items-center justify-between bg-white p-4 rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="bg-[#D9D9D9] rounded-lg p-4">
          <Image
            src={app.image}
            alt={app.title}
            width={80}
            height={80}
            className="rounded-xl"
          />
        </div>
        <div>
          <h3 className="font-medium text-xl text-[#001931] ">{app.title}</h3>
          <div className="flex flex-wrap gap-4 mt-4 items-center">
            <div className="text-[#00D390] flex items-center gap-2 font-medium ">
              <LuDownload />
              <p>{app.downloads}</p>
            </div>
            <div className="text-[#FF8811] flex items-center gap-2 font-medium">
              <FaStar />
              <p>{app.ratingAvg}</p>
            </div>
            <div>
              <p className="text-[#627382]">{app.size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleClick(app)}
          className="btn bg-[#00D390] text-white "
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
