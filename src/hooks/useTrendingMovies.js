import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };
  
    useEffect(() => {
        getTrendingMovie();
    },[])
};

export default useTrendingMovies;