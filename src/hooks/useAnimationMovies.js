import { useDispatch, useSelector } from "react-redux";
import { addAnimationMovies, addPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useAnimationMovies = () => {
    const dispatch = useDispatch();

    const animationMovies = useSelector(store => store.movies.animationMovies);

    const getAnimationMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=16",API_OPTIONS);
      const json = await data.json();
      dispatch(addAnimationMovies(json.results));
    };
  
    useEffect(() => {
      !animationMovies && getAnimationMovie();
    },[])
};

export default useAnimationMovies;