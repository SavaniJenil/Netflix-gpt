import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constance";
import { addGptMovieResult } from "../store/GPTSlice";
import { TMDB_MOVIES } from "../utils/moviesData";

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  const langName = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMovieFromTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {

    //Below lines are not working due to GPT API not accessible.

    // const gptQuery =
    //   "Act as a Movie recomendation system and suggest some movies for the query " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const gptMovies = gptResult.choices?.[0]?.message?.content.split(", "); // ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"]
    // const promiseArray = gptMovies.map((movie) => {
    //   // this will return [promise, promise, promise, promise, promise]
    //   fetchMovieFromTMDB(movie);
    // });

    // const tmdbResults = await Promise.all(promiseArray);

    //Below 2 lines are added for backup of API failed
    const gptMovies = ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"];
    const tmdbResults = TMDB_MOVIES ; 

    const exactMatches = [];
    const matchedMovieNames = new Set();
    for (const movie of tmdbResults) {
      if (Array.isArray(movie)) {
        // If movie is an array, iterate through it to check for title matches
        for (const innerMovie of movie) {
          if (
            gptMovies.includes(innerMovie.title) &&
            !matchedMovieNames.has(innerMovie.title)
          ) {
            exactMatches.push(innerMovie);
            matchedMovieNames.add(innerMovie.title);

            // Break if you've found 5 exact matches
            if (exactMatches.length === 5) {
              break;
            }
          }
        }
      } else {
        // Check if the title exactly matches any of the movie names
        if (
          gptMovies.includes(movie.title) &&
          !matchedMovieNames.has(movie.title)
        ) {
          exactMatches.push(movie);
          matchedMovieNames.add(movie.title);

          // Break if you've found 5 exact matches
          if (exactMatches.length === 5) {
            break;
          }
        }
      }
      // Break if you've found 5 exact matches
      if (exactMatches.length === 5) {
        break;
      }
    }

    // Now, exactMatches contains the exact matching movies (up to 5)

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-48 flex justify-center">
      <form
        className="w-1/2  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-xl"
          placeholder={lang[langName].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-lg text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langName].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
