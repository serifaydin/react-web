import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        }
    }
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;