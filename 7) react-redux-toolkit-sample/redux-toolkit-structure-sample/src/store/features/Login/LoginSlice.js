import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", surname: "" };

export const LoginSlice = createSlice({
    name: "login",
    initialState: { value: initialStateValue },
    reducers: {
        loginAction: (state, action) => {
            state.value = action.payload;
        },
        logoutAction: (state) => {
            state.value = initialStateValue;
        }
    }
});

export const loginReducer = LoginSlice.reducer;
export const { loginAction, logoutAction } = LoginSlice.actions;