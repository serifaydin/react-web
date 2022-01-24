import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moleculeReducer } from "./reducers/Molecule/MoleculeSlice";
import { orderReducer } from "./reducers/Order/OrderSlice";
import { saladReducer } from "./reducers/Salad/SaladSlice";
import { appReducer } from "./reducers/App/AppSlice";

const rootReducer = combineReducers({
    appReducer,
    moleculeReducer,
    orderReducer,
    saladReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });
};
