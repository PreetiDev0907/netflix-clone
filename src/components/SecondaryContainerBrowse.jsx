import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainerBrowse = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-44 relative z-20">
          <MovieLists title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieLists title={"Trending"} movies={movies?.trendingMovies} />
          <MovieLists title={"New Releases"} movies={movies?.trendingMovies} />
          <MovieLists title={"Top Picks"} movies={movies?.trendingMovies} />
          <MovieLists
            title={"Blockbuster Movies"}
            movies={movies?.trendingMovies}
          />
          <MovieLists
            title={"Only On Netflix GPT"}
            movies={movies?.trendingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainerBrowse;
