import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMainMovie = async () => {
    const mainMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await mainMovie.json();
    const movieTrailer = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const url = movieTrailer.length
      ? movieTrailer[1]?.key
      : json?.results[0]?.key;
    dispatch(addMovieTrailer(url));
  };
  useEffect(() => {
    fetchMainMovie();
  }, []);
};

export default useMovieTrailer;
