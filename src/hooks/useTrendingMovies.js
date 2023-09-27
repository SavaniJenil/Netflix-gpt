import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const trendingMovies = useSelector(store => store.movies.trendingMovies);

    const getTrendingMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",API_OPTIONS);
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };
  
    useEffect(() => {
      !trendingMovies && getTrendingMovie();
    },[])
};

export default useTrendingMovies;