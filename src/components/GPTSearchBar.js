import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GPTSearchBar = () => {

    const langName = useSelector( store => store.config.lang );
    console.log(langName);
  return (
    <div className="pt-48 flex justify-center">
      <form className="w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-xl"
          placeholder={lang[langName].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-lg text-white rounded-lg col-span-3">
          {lang[langName].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
