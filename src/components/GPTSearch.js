import { BG_IMG } from "../utils/constance";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
<div className="">
<div className="fixed bg-cover z-[-1] ">
        <img
          className="scale-y-110 "
          alt="bg-img"
          src={BG_IMG}
        />
      </div>
    <GPTSearchBar />
    <GPTMovieSuggestion />
</div>
    )
}

export default GPTSearch;
