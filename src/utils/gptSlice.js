import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearch: false,
    gptMovieNames: null,
    gptMovieDetails: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.isGptSearch = !state.isGptSearch;
    },
    addMovieGptResult: (state, action) => {
      const { gptMovieNames, gptMovieDetails } = action.payload;
      state.gptMovieNames = gptMovieNames;
      state.gptMovieDetails = gptMovieDetails;
    },
  },
});

export const { toggleGptSearch, addMovieGptResult } = gptSlice.actions;

export default gptSlice.reducer;
