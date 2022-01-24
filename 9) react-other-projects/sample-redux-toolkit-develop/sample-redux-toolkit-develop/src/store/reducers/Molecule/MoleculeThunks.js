import { createAsyncThunk } from "@reduxjs/toolkit";
import { moleculeAPI } from "../../../api/MoleculeAPI";

export const fetchMolecules = createAsyncThunk("fetchMolecules", async (_, thunkAPI) => {
    try {
        const response = await moleculeAPI.getMolecules();
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchMolecule = createAsyncThunk("fetchMolecule", async (id, thunkAPI) => {
    try {
        const response = await moleculeAPI.getMolecule(id);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
