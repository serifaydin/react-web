import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/users/userSlice"

const store = configureStore({
    reducer: {
        users: userReducer
    }
});

export default store;