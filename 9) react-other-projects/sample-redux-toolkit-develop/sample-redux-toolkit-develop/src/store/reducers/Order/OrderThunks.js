import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderAPI } from "../../../api/OrderAPI";

export const postOrder = createAsyncThunk("postOrder", async (_, thunkAPI) => {
    try {
        const { order } = thunkAPI.getState().orderReducer;
        const response = await orderAPI.setOrder(order);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
