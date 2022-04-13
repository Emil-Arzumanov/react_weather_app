import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainSlice from "./mainReducer";

const reducers = combineReducers({
    mainReducer: mainSlice,
})

export const store = configureStore({
    reducer: reducers,
})