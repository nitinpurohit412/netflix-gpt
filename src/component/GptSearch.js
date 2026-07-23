import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-20">
        <img className="h-screen object-cover md:w-screen" alt="bg-img" src={BG_IMG} />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
