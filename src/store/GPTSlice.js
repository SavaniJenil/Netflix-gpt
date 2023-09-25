import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"GPT",
    initialState: {
        showGPTSearch: false,
        gptMovies: null,
        moviesName: null,
    },
    reducers: {
        toggleGPTSearchView: (state,action) =>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.gptMovies = movieResults;
            state.moviesName = movieNames;
        }
    }
});

export const { toggleGPTSearchView, addGptMovieResult } = GPTSlice.actions;

export default GPTSlice.reducer;