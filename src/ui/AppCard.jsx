import Image from "next/image";
import React from "react";

const AppCard = ({ app }) => {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-300 shadow">
      <Image
        src={app.image}
        alt={app.title}
        height={400}
        width={300}
        className="rounded-lg mx-auto"
      />
      <h3 className="font-medium text-xl text-[#001931] my-4">{app.title}</h3>
    </div>
  );
};

export default AppCard;
