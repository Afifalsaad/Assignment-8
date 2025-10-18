import React from "react";
import useApps from "../Hooks/useApps";
import HomeApps from "./HomeApps";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-[48px] font-bold text-[#182f45]">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="text-center grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1200px] gap-3 md:gap-6 p-1">
        {apps.map((data) => (
          <HomeApps data={data}></HomeApps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
