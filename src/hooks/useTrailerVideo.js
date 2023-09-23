import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";
import { addTrailerVideo } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = ( id ) =>{
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterdData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterdData.length ? filterdData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer?.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;