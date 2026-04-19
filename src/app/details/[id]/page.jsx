"use client";
import MyContainer from "@/components/Shared/MyContainer";
import { useParams } from "next/navigation";
import React, { use } from "react";

const appsPromise = fetch("http://localhost:3000/data.json").then((res) =>
  res.json(),
);

const DetailsPage = () => {
  const allApps = use(appsPromise);
  const { id } = useParams();
  const expectedApp = allApps.find((app) => app.id == id);
  console.log(expectedApp);
  return (
    <div className="pt-30">
      <MyContainer>
        <p>Details page</p>
      </MyContainer>
    </div>
  );
};

export default DetailsPage;
