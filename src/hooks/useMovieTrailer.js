import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const isMovieTrailer = useSelector((store) => store?.movies?.movieTrailer);
  const fetchMainMovie = async () => {
    const mainMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await mainMovie.json();
    const movieTrailer = json?.results?.find(
      (video) => video.name === "Official Trailer"
    );
    const url = movieTrailer ? movieTrailer?.key : json?.results[0]?.key;
    dispatch(addMovieTrailer(url));
  };
  useEffect(() => {
    !isMovieTrailer && fetchMainMovie();
  }, []);
};

export default useMovieTrailer;
