import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMovieSuggestion = ()=> {

    const { moviesName, gptMovies } = useSelector((store) => store.GPT);
    if(!moviesName) return null;

    return(
        <div className="p-4 m-4 bg-black bg-opacity-70 md:bg-opacity-80 text-white">
            <div>
                {moviesName.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={gptMovies[index]} />)}
            </div>            
        </div>
    )
};

export default GPTMovieSuggestion;