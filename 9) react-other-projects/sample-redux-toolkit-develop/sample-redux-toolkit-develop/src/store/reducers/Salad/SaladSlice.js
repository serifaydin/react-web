import { createSlice } from "@reduxjs/toolkit";
import { fetchSalads } from "./SaladThunks";

const initialState = {
    salads: [],
    salad: {},
    blockers: [],
    loading: false,
    error: "",
};

export const SaladSlice = createSlice({
    name: "salad",
    initialState,
    reducers: {
        getSaladById(state, action) {
            state.salad = state.salads.find((salad) => salad._id === action.payload);
        },
        checkLock(state, action) {
            state.salads.forEach((salad) => {
                salad.composition.find((id) => {
                    for (let molecule of action.payload) {
                        if (
                            id === molecule._id &&
                            molecule.qty < (salad.composition.filter((x) => x === molecule._id).length || 1) &&
                            !state.blockers.includes(salad._id)
                        ) {
                            state.blockers.push(salad._id);
                            return true;
                        }
                    }
                });
            });
        },
        addSalad(state, action) {
            state.salads.push(action.payload);
        },
    },
    extraReducers: {
        [fetchSalads.fulfilled.type]: (state, actions) => {
            state.loading = false;
            state.error = "";
            state.salads = actions.payload.result;
        },
        [fetchSalads.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchSalads.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const saladReducer = SaladSlice.reducer;
export const { getSaladById, checkLock, addSalad } = SaladSlice.actions;
