import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";
import GptSearch from "./GptSearch";

const Browse = () => {
  const isGptSearch = useSelector((store) => store?.gpt?.isGptSearch);
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {isGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainerBrowse />
          <SecondaryContainerBrowse />
        </>
      )}
    </div>
  );
};

export default Browse;
