import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // const moviesNames = json.map(elem => )
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
