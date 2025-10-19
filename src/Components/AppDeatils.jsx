import React from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from '../assets/icon-review.png'
import useApps from "../Hooks/useApps";

const AppDetails = () => {
    const data = useApps()
    console.log(data)
  return (
    <div className="bg-[#62738210]">
      <div>
        <div className="flex p-7 gap-6 ">
          <div>
            <img src="https://i.ibb.co.com/q3s3mxrZ/Medi-Care.jpg" alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
            <p className="border-b-1 border-[#d0d3d6] pb-6">
              Developed by : <span className="text-[#743fe8]">hikimora</span>
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
            <button className="mt-4 px-5 py-2 bg-[#00d491] rounded-md text-white font-semibold text-xl">Install Now (26 MB)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
