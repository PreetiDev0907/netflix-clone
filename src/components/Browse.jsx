import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainerBrowse from "./MainContainerBrowse";
import SecondaryContainerBrowse from "./SecondaryContainerBrowse";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainerBrowse />
      <SecondaryContainerBrowse />
    </div>
  );
};

export default Browse;
