import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import HomeApps from "./HomeApps";
import { Link } from "react-router";
import Loader from "./Loader";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedApps, setSearchedApps] = useState(apps);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchedApps(apps);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);

    const handler = setTimeout(() => {
      const trim = search.trim().toLowerCase();
      const filteredApps =  apps.filter((app) => app.title.toLowerCase().includes(trim))
        

      setSearchedApps(filteredApps);
      setIsSearching(false)
    }, 350);

    return () => {
      clearTimeout(handler);
    };
  }, [search, apps, loading]);

  const showLoader = loading || isSearching;

  return (
    <div className="bg-[#62738210] min-h-screen">
      <div className="py-12 text-center">
        <h1 className="text-[48px] font-bold text-[#182f45]">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mx-auto max-w-[1200px] my-4 text-2xl font-semibold flex justify-between px-1">
        <h1>({apps.length}) Apps Found</h1>
        <input
          className="border-1 text-[14px] md:text-[16px] p-2 md:p-2  rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search app"
        />
      </div>
      {showLoader ? (
        <Loader></Loader>
      ) : (
        <div className="text-center min-h-screen grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1200px] gap-3 md:gap-6 p-1">
          {searchedApps.length > 0 ? (
            searchedApps.map((data) => (
              <Link to={`/appDetails/${data.id}`} key={data.id}>
                <HomeApps data={data} ></HomeApps>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-4 text-3xl font-semibold">
              No App Found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
