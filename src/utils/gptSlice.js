import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.isGptSearch = !state.isGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
