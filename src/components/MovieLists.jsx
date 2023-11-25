import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="px-12">
      <h1 className="text-white font-3xl py-4 text-2xl">{title}</h1>
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
