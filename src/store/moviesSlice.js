import { createSlice } from "@reduxjs/toolkit";

const moviesSlice  = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        animationMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        sifiMovies: null,
        romanticMovies: null,
        comadyMovies: null,
        actionMovies: null,
        horrorMovies: null,
        trailerKey: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addAnimationMovies: (state, action) => {
            state.animationMovies = action.payload;
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
        addSiFiMovies: (state, action) => {
            state.sifiMovies = action.payload;
        },
        addRomanticMovies: (state, action) => {
            state.romanticMovies = action.payload;
        },
        addComadyMovies: (state, action) => {
            state.comadyMovies = action.payload;
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload;
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerKey = action.payload;
        },
    }
});

export const { addNowPlayingMovies, addAnimationMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies, addTrailerVideo, addSiFiMovies, addRomanticMovies, addComadyMovies, addActionMovies, addHorrorMovies } = moviesSlice.actions;

export default moviesSlice.reducer;