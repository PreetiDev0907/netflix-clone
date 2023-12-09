import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.pageLang?.lang);
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-2 m-2 col-span-9 bg-gray-900 rounded-md text-white"
          type="text"
          placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
        />
        <button className="p-2 m-2 bg-red-600 text-white rounded-md col-span-3">
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
