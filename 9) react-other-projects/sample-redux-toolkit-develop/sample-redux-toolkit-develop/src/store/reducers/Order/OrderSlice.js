import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./OrderThunks";

const initialState = {
    salads: [],
    order: {
        molecules: [],
    },
    loading: false,
    error: "",
};

export const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        pushOrder(state, action) {
            state.salads.push(action.payload);
        },
        calculate(state) {
            const molecules = {};
            state.salads.forEach((salad) => {
                salad.composition.forEach((molecule) => {
                    molecules[molecule._id] = (molecules[molecule._id] || 0) + molecule.count;
                });
            });

            const moleculesKeys = Object.keys(molecules);
            state.order.molecules = moleculesKeys.map((id) => ({
                id,
                qty: molecules[id],
            }));
        },
    },
    extraReducers: {
        [postOrder.fulfilled.type]: (state, actions) => {
            state.loading = false;
            state.error = "";
            state.salads = [];
            state.order = { molecules: [] };
        },
        [postOrder.pending.type]: (state) => {
            state.loading = true;
        },
        [postOrder.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const orderReducer = OrderSlice.reducer;
export const { pushOrder, calculate } = OrderSlice.actions;
