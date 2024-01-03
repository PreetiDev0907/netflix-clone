import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="md:px-12 px-4 py-4 w-screen bg-black bg-opacity-40">
      <h1 className="text-white font-normal md:font-semibold py-2 md:py-4 text-lg md:text-2xl">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
