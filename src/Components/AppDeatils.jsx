import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  if (loading) return <p>Loading...</p>;
  const filteredData = apps.find((app) => String(app.id) === id);
  const { image, title, companyName, description, ratings } = filteredData;
  // console.log(filteredData)
  console.log(ratings);

  return (
    <div className="bg-[#62738210]">
      <div>
        <div className="flex p-7 gap-6 ">
          <div>
            <img src={image} alt="" />
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
                <h1 className="text-3xl font-bold">8M</h1>
              </div>
              <div className="hidden md:block">
                <img className="w-[30px]" src={rating} alt="" />
                <p className="my-2">Downloads</p>
                <h1 className="text-3xl font-bold">8M</h1>
              </div>
              <div className="hidden md:block">
                <img className="w-[30px]" src={review} alt="" />
                <p className="my-2">Downloads</p>
                <h1 className="text-3xl font-bold">8M</h1>
              </div>
            </div>
            <button className="mt-4 md:mt-38 md:px-5 p-1 md:py-2 bg-[#00d491] rounded-md text-white font-semibold text-[12px] md:text-xl">
              Install Now (26 MB)
            </button>
          </div>
        </div>
      </div>
      <BarChart className="mt-12 px-7" layout="vertical" width={1000} height={400} data={ratings}>
      <XAxis type="number" dataKey="count" />
      <YAxis type="category" dataKey='name' />
        <Bar  dataKey='count' fill="#ff8812"></Bar>
      </BarChart>
      <div className="p-7">
        <h1 className="text=2xl font-semibold">Description</h1>
        <p className="text-md mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
