import React, { useRef } from "react";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addMovieGptResult } from "../utils/gptSlice";
import useMovieSearch from "../hooks/useMovieSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.pageLang?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearch = async () => {
    const gptquery = `Act as a Movie Recommendation system and suggest some movies for the query : 
    ${searchText.current.value}. 
    Only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya etc`;
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptquery }],
    });
    console.log(gptResults?.choices[0]?.message?.content);
    const gptMovieNames = gptResults?.choices[0]?.message?.content.split(", ");

    const promiseArray = gptMovieNames.map((movie) => useMovieSearch(movie));

    const resolvedMovieResults = await Promise.all(promiseArray);

    dispatch(
      addMovieGptResult({
        gptMovieNames: gptMovieNames,
        gptMovieDetails: resolvedMovieResults,
      })
    );
  };
  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-2 col-span-9 bg-gray-900 rounded-md text-white"
          type="text"
          placeholder={languageConstants[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="p-2 m-2 bg-red-600 text-white rounded-md col-span-3"
          onClick={handleGptSearch}
        >
          {languageConstants[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
