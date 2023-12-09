import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptSuggestions = () => {
  const { gptMovieNames, gptMovieDetails } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;

  return (
    <div>
      <MovieLists title="Search Results" movies={gptMovieDetails[0]} />
    </div>
  );
};

export default GptSuggestions;
