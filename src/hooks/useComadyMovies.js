import { useDispatch, useSelector } from "react-redux";
import { addComadyMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useComadyMovies = () => {
    const dispatch = useDispatch();

    const comadyMovies = useSelector(store => store.movies.comadyMovies);

    const getComadyMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=35&with_original_language=hi",API_OPTIONS);
      const json = await data.json();
      dispatch(addComadyMovies(json.results));
    };
  
    useEffect(() => {
      !comadyMovies && getComadyMovie();
    },[])
};

export default useComadyMovies;