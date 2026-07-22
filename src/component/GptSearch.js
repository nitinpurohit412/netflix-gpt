import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img alt="bg-img" src={BG_IMG} />
      </div>
      <GptSearchBar />

      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
