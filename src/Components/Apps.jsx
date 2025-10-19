import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import HomeApps from "./HomeApps";
import { Link } from "react-router";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");

  const trim = search.trim().toLowerCase();
  const searchedApps = trim
    ? apps.filter((app) => app.title.toLowerCase().includes(trim))
    : apps;
    console.log(searchedApps)
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-[48px] font-bold text-[#182f45]">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mx-auto max-w-[1200px] my-4 text-2xl font-semibold flex justify-between">
        <h1>({searchedApps.length}) Apps Found</h1>
        <input
          className="border-1 text-[18px] p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search app"
        />
      </div>
      <div className="text-center grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1200px] gap-3 md:gap-6 p-1">
        {searchedApps.map((data) => (
          <Link to={`/appDetails/${data.id}`}>
            <HomeApps data={data}></HomeApps>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Apps;
