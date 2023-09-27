import MovieCard from "./MovieCard";
import "../index.css";

const MovieList = ({ title, movies }) => {
  return (
    // <div>
    <div className="px-2 md:px-6">
      <h1 className="text-lg md:text-3xl py-2 md:py-4 text-white">{title}</h1>
      <div className="flex flex-row">
        <div className="flex scroll-container">
          {movies?.map((movie) => (
              movie.poster_path ? <MovieCard key={movie.id} posterPath={movie.poster_path} /> : ""            
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MovieList;
