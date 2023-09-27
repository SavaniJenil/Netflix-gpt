import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black bg-opacity-90 md:bg-opacity-100">
        <div className="mt-0 md:-mt-60 px-3 md:pl-12 relative z-3">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
          <MovieList title={"Beinge-worthy Si-Fi"} movies={movies.sifiMovies} />
          <MovieList title={"Romantic Hindi"} movies={movies.romanticMovies} />
          <MovieList title={"Comady Movies"} movies={movies.comadyMovies} />
          <MovieList title={"Action Movies"} movies={movies.actionMovies} />
          <MovieList title={"Horror Movies"} movies={movies.horrorMovies} />
          <MovieList title={"Animation Movies"} movies={movies.animationMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming "} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
