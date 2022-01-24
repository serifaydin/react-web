import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from './features/Login/LoginSlice'
import { themeReducer } from './features/theme/ThemeSlice'
import { todoReducer } from './features/todo/todoSlice'

const rootReducers = combineReducers({
    loginReducer,
    themeReducer,
    todoReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    });
}