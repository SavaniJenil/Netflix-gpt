import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";
import { addTrailerVideo } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = ( id ) =>{
    const dispatch = useDispatch();

    const trailerKey = useSelector(store => store.movies.trailerKey);

  const getMovieVideos = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterdData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterdData.length ? filterdData[0] : json.results[0];
    console.log("Trailer key:",trailer?.key);
        dispatch(addTrailerVideo(trailer?.key));
  };

  useEffect(() => {
    if (id || !trailerKey) {
      getMovieVideos();
    }
  }, [id]);
};

export default useTrailerVideo;