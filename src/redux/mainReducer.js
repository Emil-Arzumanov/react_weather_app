import initialState from "./initialState";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import weatherService from "../api/weatherAPI";

export const getWeatherDataByCoords = createAsyncThunk(
    "main/weatherData",
    async ({lat, lon}) => {
        try {
            const response = await weatherService.getDataByCoords(lat, lon);
            return response.data;
        } catch (error) {
            alert(error);
        }
    }
);

export const getWeatherDataByCityName = createAsyncThunk(
    "main/weatherData",
    async ({cityName}) => {
        try {
            const response = await weatherService.getDataByCityName(cityName);
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
        updateCurrentCityNameInput(state, action) {
            state.currentCityNameInput = action.payload;
        },
    },
    extraReducers: {
        [getWeatherDataByCoords.fulfilled]: (state, action) => {
            state.weatherData = action.payload;
        },
        [getWeatherDataByCoords.rejected]: (state) => {
            state.weatherData = "ERROR!";
        },
        [getWeatherDataByCityName.fulfilled]: (state, action) => {
            state.weatherData = action.payload;
            state.currentCityNameInput = "";
        },
        [getWeatherDataByCityName.rejected]: (state) => {
            state.weatherData = "ERROR!";
        },
    }
})

export const {
    updateNameInput,
    updateCurrentCityNameInput,
} = mainSlice.actions
export default mainSlice.reducer