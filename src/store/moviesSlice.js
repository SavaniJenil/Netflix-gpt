import { createSlice } from "@reduxjs/toolkit";

const moviesSlice  = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trailerKey: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerKey = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;