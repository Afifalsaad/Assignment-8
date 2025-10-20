import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const currentApp = apps.find((app) => String(app.id) === id);
    console.log(currentApp);
    if (!currentApp) return;

    const installedApps = JSON.parse(localStorage.getItem("installed")) || [];

    const alreadyInstalled = installedApps.some(
      (app) => app.id === currentApp.id
    );
    setIsInstalled(alreadyInstalled);
  }, [apps, id]);

  if (loading) return <p>Loading...</p>;
  const filteredData = apps.find((app) => String(app.id) === id);

  const {
    image,
    title,
    companyName,
    description,
    ratings,
    size,
    downloads,
    ratingAvg,
    reviews,
  } = filteredData;

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    let updatedList = [];

    if (existingList) {
      const isAlreadyExist = existingList.find(
        (app) => app.id === filteredData.id
      );
      if (isAlreadyExist) return alert("Already Installed");
      updatedList = [...existingList, filteredData];
    } else {
      updatedList.push(filteredData);
    }
    localStorage.setItem("installed", JSON.stringify(updatedList));

    setIsInstalled(true);
    toast.success("Installed!", {
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
    <div className="bg-[#62738210]">
      <div>
        <div className="flex p-7 gap-6">
          <div>
            <img className="w-[500px] rounded-md" src={image} alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="border-b-1 border-[#d0d3d6] pb-6">
              Developed by :{" "}
              <span className="text-[#743fe8]">{companyName}</span>
            </p>
            <div className="flex md:gap-16 mt-3">
              <div className="hidden md:block">
                <img className="w-[30px]" src={download} alt="" />
                <p className="my-2">Downloads</p>
                <h1 className="text-3xl font-bold">{downloads}</h1>
              </div>
              <div className="hidden md:block">
                <img className="w-[30px]" src={rating} alt="" />
                <p className="my-2">Average Ratings</p>
                <h1 className="text-3xl font-bold">{ratingAvg}</h1>
              </div>
              <div className="hidden md:block">
                <img className="w-[30px]" src={review} alt="" />
                <p className="my-2">Total review</p>
                <h1 className="text-3xl font-bold">{reviews}</h1>
              </div>
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
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="mt-4 md:mt-22 md:px-5 p-1 md:py-2 bg-[#00d491] rounded-md text-white font-semibold text-[12px] md:text-xl hover:cursor-pointer">
              {isInstalled ? "Installed" : `Install Now ${size} MB`}
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[1000px] h-[400px]">
        <ResponsiveContainer>
          <BarChart
            className="mt-12 px-7"
            layout="vertical"
            width={800}
            height={300}
            data={ratings}>
            <XAxis type="number" dataKey="count" />
            <YAxis type="category" dataKey="name" />
            <Bar dataKey="count" fill="#ff8812"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-7">
        <h1 className="text=2xl font-semibold">Description</h1>
        <p className="text-md mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
