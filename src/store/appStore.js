import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import moviesReducer from "../store/moviesSlice";
import GPTReducer from "../store/GPTSlice";
import configReducer from "../store/configSlice";

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
            GPT: GPTReducer,
            config: configReducer,
        }
    }
)

export default appStore;