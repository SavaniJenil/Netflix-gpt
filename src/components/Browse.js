import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useAnimationMovies from "../hooks/useAnimationMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useActionMovies from "../hooks/useActionMovies";
import useComadyMovies from "../hooks/useComadyMovies";
import useHorrorMovies from "../hooks/useHorroMovies";
import useRomanticMovies from "../hooks/useRomanticMovies";
import useSiFiMovies from "../hooks/useSiFiMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.GPT.showGPTSearch);

  useNowPlayingMovies();
  useAnimationMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useActionMovies();
  useComadyMovies();
  useHorrorMovies();
  useRomanticMovies();
  useSiFiMovies();

  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
