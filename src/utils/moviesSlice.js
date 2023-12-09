import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    trendingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addTopRatedMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
