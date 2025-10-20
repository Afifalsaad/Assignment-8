import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
