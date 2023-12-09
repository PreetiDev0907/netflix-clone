import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
