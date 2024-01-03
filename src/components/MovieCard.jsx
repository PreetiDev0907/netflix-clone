import React from "react";
import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-28 md:w-40 ">
      <img
        src={POSTER_CDN_URL + movie?.poster_path}
        alt={movie?.original_title}
      />
    </div>
  );
};

export default MovieCard;
