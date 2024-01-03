import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const isTrendingMovies = useSelector(
    (store) => store?.movies?.trendingMovies
  );

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    !isTrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
