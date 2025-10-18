import React from "react";
import GooglePlay from "../assets/fi_16076057.png";
import appStore from "../assets/fi_5977575.png";
import hero from "../assets/hero.png";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#62738210]">
      {/* Header Section */}
      <div>
        <div className="text-center">
          <h1 className="text-[48px] font-bold text-[#182f45]">
            We Build <br />
            <span className="text-[#632ee3]">Productive</span> Apps
          </h1>
          <p className="px-1.5 md:w-[650px] mx-auto text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex gap-6.5 items-center justify-center my-4">
          <div className="flex gap-1.5 items-center border-1 border-[#d1d1d1] py-2 px-4 rounded-md font-semibold">
            <img src={GooglePlay} alt="" />
            <h2>Google Play</h2>
          </div>
          <div className="flex gap-1.5 items-center border-1 border-[#d1d1d1] py-2 px-4 rounded-md font-semibold">
            <img src={appStore} alt="" />
            <h2>App Store</h2>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div>
        <div className="mt-12">
          <div className="flex justify-center">
            <img className="w-[800px] " src={hero} alt="" />
          </div>
        </div>
        <div className="text-center bg-linear-to-r from-[#632ee3] to-[#9f62f2]">
          <h1 className="text-4xl font-bold text-white pt-3 md:pt-16 pb-4 md:pb-8">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex md:gap-18 md:w-[700px] mx-auto pb-3 md:pb-12 text-white">
            <div>
              <p className="text-sm">Total Downloads</p>
              <h1 className="font-bold text-3xl md:text-5xl my-1.5">29.6M</h1>
              <p className="text-sm">21% more than last month</p>
            </div>
            <div>
              <p className="text-sm">Total Reviews</p>
              <h1 className="font-bold text-3xl md:text-5xl my-1.5">906K</h1>
              <p className="text-sm">46% more than last month</p>
            </div>
            <div>
              <p className="text-sm">Active Apps</p>
              <h1 className="font-bold text-3xl md:text-5xl my-1.5">132+</h1>
              <p className="text-sm">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
    </div>
  );
};

export default Home;
