import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-xl loading-spinner text-success"></span>
      {/* <h1 className="text-5xl">Loading...</h1> */}
    </div>
  );
};

export default Loader;
