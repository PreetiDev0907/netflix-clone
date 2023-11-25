import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainMovieVideo = ({ movie_id }) => {
  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);
  useMovieTrailer(movie_id);

  if (!movieTrailer) return;

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer +
          "?&autoplay=1&mute=1&controls=0&frameborder=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainMovieVideo;
