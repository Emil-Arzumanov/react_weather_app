import initialState from "./initialState";
import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        updateNameInput(state, action) {
            state.currentNameInput = action.payload;
        },
    },
})

export const {
    updateNameInput
} = mainSlice.actions
export default mainSlice.reducer