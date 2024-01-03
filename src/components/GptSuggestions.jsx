import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptSuggestions = () => {
  const { gptMovieNames, gptMovieDetails } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;

  return (
    <div className="bg-inherit">
      {gptMovieNames.map((movieName, index) => (
        <MovieLists
          key={movieName}
          title={movieName}
          movies={gptMovieDetails[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
