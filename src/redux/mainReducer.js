import initialState from "./initialState";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import weatherService from "../api/weatherAPI";

export const getWeatherData = createAsyncThunk(
    "main/weatherData",
    async ({lat, lon}) => {
        try {
            const response = await weatherService.getData(lat, lon);
            return response.data;
        } catch (error) {
            alert(error);
        }
    }
);

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        updateNameInput(state, action) {
            state.currentNameInput = action.payload;
        },
    },
    extraReducers: {
        [getWeatherData.fulfilled]: (state, action) => {
            state.weatherData = action.payload;
        },
        [getWeatherData.rejected]: (state) => {
            state.weatherData = "ERROR!";
        },
    }
})

export const {
    updateNameInput
} = mainSlice.actions
export default mainSlice.reducer