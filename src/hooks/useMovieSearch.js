import { API_OPTIONS } from "../utils/constants";

const useMovieSearch = async (movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  const filteredResult = json.results.filter(
    (movieName) => movieName.original_title === movie
  );
  return filteredResult;
};

export default useMovieSearch;
