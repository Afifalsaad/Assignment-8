import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const HomeApps = ({ data }) => {
  const { image, title, downloads, ratingAvg } = data;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm">
        <img className="p-3 h-[200px] md:h-[280px]" src={image} alt="Shoes" />
        <div className="px-3">
          <h2 className="card-title mb-2">{title}</h2>
        </div>
        <div className="flex justify-between px-3 mb-3">
          <div className="flex items-center gap-2 px-2 bg-[#f1f5e9] rounded-sm">
            <img className="w-[15px] h-[15px]" src={download} alt="" />
            <p className="text-[#00d491]">{downloads}</p>
          </div>
          <div className="flex items-center gap-2 px-1 bg-[#fff0e0] rounded-sm">
            <img className="w-[15px] h-[15px]" src={rating} alt="" />
            <p className="text-[#ff8812]">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApps;
