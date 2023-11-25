import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainMovieVideo = ({ movie_id }) => {
  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);
  useMovieTrailer(movie_id);

  if (!movieTrailer) return;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movieTrailer}?si=8UGTdxExfEw07ojm`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainMovieVideo;
