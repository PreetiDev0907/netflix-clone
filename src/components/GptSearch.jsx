import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
