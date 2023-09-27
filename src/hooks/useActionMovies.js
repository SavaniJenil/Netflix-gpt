import { useDispatch, useSelector } from "react-redux";
import { addActionMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useActionMovies = () => {
    const dispatch = useDispatch();

    const actionMovies = useSelector(store => store.movies.actionMovies);

    const getActionMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=28&with_original_language=hi",API_OPTIONS);
      const json = await data.json();
      dispatch(addActionMovies(json.results));
    };
  
    useEffect(() => {
      !actionMovies && getActionMovie();
    },[])
};

export default useActionMovies;