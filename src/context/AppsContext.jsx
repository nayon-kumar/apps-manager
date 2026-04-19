"use client";
import { createContext, useState } from "react";

export const MyContext = createContext();

const AppsContext = ({ children }) => {
  const [apps, setApps] = useState([]);
  const data = {
    apps,
    setApps,
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default AppsContext;
