import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-9xl font-extrabold animate-pulse drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-6">Page Not Found</h2>
      <p className="text-center mt-4 text-lg md:text-xl max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved
        or deleted.
      </p>
      <Link to="/" className="mt-8">
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-purple-100 hover:cursor-pointer transition duration-300">
          Go Back Home
        </button>
      </Link>

      {/* <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white opacity-10 rounded-full animate-bounce-slow"></div> */}
    </div>
  );
};

export default ErrorPage;
