import React from "react";

const MainMovieTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-row gap-2">
        <button className="m-2 p-1 px-4 bg-gray-300 rounded-[4px] text-white">
          ⏯️ Play
        </button>
        <button className="m-2 p-1 px-4 bg-gray-300 rounded-[4px] text-white">
          ℹ️ Info
        </button>
      </div>
    </div>
  );
};

export default MainMovieTitle;
