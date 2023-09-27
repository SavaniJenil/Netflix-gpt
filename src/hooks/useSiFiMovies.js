import { useDispatch, useSelector } from "react-redux";
import { addSiFiMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useSiFiMovies = () => {
    const dispatch = useDispatch();

    const sifiMovies = useSelector(store => store.movies.sifiMovies);

    const getSiFiMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878",API_OPTIONS);
      const json = await data.json();
      dispatch(addSiFiMovies(json.results));
    };
  
    useEffect(() => {
      !sifiMovies && getSiFiMovie();
    },[])
};

export default useSiFiMovies;