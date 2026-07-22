import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);

  //   const gptQuery =
  //     "Act as a movie Recommendation system and suggest some movies  for the query" +
  //     searchText.current.value +
  //     ". only give me name of 5 movies, comma seprated like the example result given ahead. Example Result : Gadar, Sholay, Don, Koi Mil gaya, intersteller";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   console.log(gptResults.choices);
  // };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white col-span-3 m-4 py-2 px-4 rounded-lg"
          // onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
