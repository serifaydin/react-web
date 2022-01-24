import { createAsyncThunk } from "@reduxjs/toolkit";
import { saladAPI } from "../../../api/SaladAPI";

export const fetchSalads = createAsyncThunk("fetchSalads", async (_, thunkAPI) => {
    try {
        const response = await saladAPI.getSalads();
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
