import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies, addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constance";

const useHorrorMovies = () => {
    const dispatch = useDispatch();

    const horrorMovies = useSelector(store => store.movies.horrorMovies);

    const getHorrorMovie = async () => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&with_genres=27&with_origin_country=IN&with_original_language=hi",API_OPTIONS);
      const json = await data.json();
      dispatch(addHorrorMovies(json.results));
    };
  
    useEffect(() => {
      !horrorMovies && getHorrorMovie();
    },[])
};

export default useHorrorMovies;