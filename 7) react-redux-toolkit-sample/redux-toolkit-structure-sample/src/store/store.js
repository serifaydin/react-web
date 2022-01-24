import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from './features/Login/LoginSlice'
import { themeReducer } from './features/theme/ThemeSlice'

const rootReducers = combineReducers({
    loginReducer,
    themeReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    });
}