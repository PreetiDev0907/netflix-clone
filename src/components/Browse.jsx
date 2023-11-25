import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainerBrowse />
      <SecondaryContainerBrowse />
    </div>
  );
};

export default Browse;
