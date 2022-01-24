import { createSlice } from "@reduxjs/toolkit";
import { initApp } from "./AppThunks";

const initialState = {
    loading: false,
    error: "",
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    extraReducers: {
        [initApp.fulfilled.type]: (state) => {
            state.loading = false;
            state.error = "";
        },
        [initApp.pending.type]: (state) => {
            state.loading = true;
        },
        [initApp.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const appReducer = AppSlice.reducer;
