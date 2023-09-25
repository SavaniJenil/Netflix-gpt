import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovie();
    },[])
};

export default useNowPlayingMovies;