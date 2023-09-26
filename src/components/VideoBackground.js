import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailerKey = useSelector((store) => store.movies?.trailerKey);
  useTrailerVideo(id);

  return (
    <div className="w-[100%]">
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1&iv_load_policy=3&showinfo=0&modestbranding=1&controls=0&disablekb=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
