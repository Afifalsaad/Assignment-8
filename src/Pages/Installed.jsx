import React, { useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import getData from "../utils/localStorage";
import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";

const Installed = () => {
  const [appList, setAppList] = useState(() => getData());
  const [sort, setSort] = useState("none");
  const { loading } = useApps();

  // useEffect(() => {
  //   const savedApps = JSON.parse(localStorage.getItem("installed"));
  //   if (savedApps) setAppList(savedApps);
  // }, []);

  const handleSort = (() => {
    if (sort === "downloads-asc") {
      return [...appList].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "downloads-desc") {
      return [...appList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appList;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = existingList.filter((app) => app.id !== id);
    setAppList(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast.success("Uninstalled!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-[#62738210] py-8 min-h-screen">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h1 className="text-4xl mb-2 font-bold">Your Installed apps</h1>
          <p className="text-[#627382] hidden md:block">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="my-4 font-semibold flex justify-between p-2">
          <h1 className="text-2xl">({appList.length}) Apps Found</h1>
          <label className="text-[14px] border-1 px-6 py-1 rounded-md text-[#627382] text-xl">
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option className="text-[10px]" value="none">Sort By Download</option>
              <option className="text-[10px]" value="downloads-asc">Low to High</option>
              <option className="text-[10px]" value="downloads-desc">High to low</option>
            </select>
          </label>
        </div>

        {loading ? (
          <Loader></Loader>
        ) : (
          handleSort.map((p) => (
            <div className="bg-white rounded-md my-6 flex justify-between items-center">
              <Link to={`/appDetails/${p.id}`}>
                <div className="flex gap-6 p-4 items-center">
                  <div>
                    <img className="w-[80px] rounded-md" src={p.image} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">{p.title}</h1>
                    <div className="flex gap-10 mt-4">
                      <div className="flex gap-1 items-center">
                        <img
                          className="w-[20px] h-[20px]"
                          src={download}
                          alt=""
                        />
                        <p className="text-[#00d491] text-xl font-semibold">
                          {p.downloads}M
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <img
                          className="w-[20px] h-[20px]"
                          src={rating}
                          alt=""
                        />
                        <p className="text-[#ff8812] text-xl font-semibold">
                          {p.ratingAvg}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#768491] text-xl font-semibold">
                          {p.size}MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="text-center">
                <button
                  onClick={() => handleRemove(p.id)}
                  className="px-6 py-2 bg-[#00d491] text-white font-semibold mr-3 rounded-md hover:cursor-pointer">
                  Uninstall
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Installed;
