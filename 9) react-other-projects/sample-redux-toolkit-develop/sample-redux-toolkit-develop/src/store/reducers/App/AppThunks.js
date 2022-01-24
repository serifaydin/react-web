import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClone, getComposition, updateQuantity } from "../Molecule/MoleculeSlice";
import { fetchMolecules } from "../Molecule/MoleculeThunks";
import { calculate, pushOrder } from "../Order/OrderSlice";
import { addSalad, checkLock } from "../Salad/SaladSlice";
import { fetchSalads } from "../Salad/SaladThunks";

export const initApp = createAsyncThunk("initApp", async (_, thunkAPI) => {
    try {
        await thunkAPI.dispatch(fetchMolecules());
        await thunkAPI.dispatch(fetchSalads());

        const { molecules } = thunkAPI.getState().moleculeReducer;
        thunkAPI.dispatch(checkLock(molecules));
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const setOrder = createAsyncThunk("setOrder", async (salad, thunkAPI) => {
    thunkAPI.dispatch(getComposition(salad));
    thunkAPI.dispatch(updateQuantity());

    const { molecules, composition } = thunkAPI.getState().moleculeReducer;

    thunkAPI.dispatch(checkLock(molecules));

    const saladOrder = { ...salad, composition };
    thunkAPI.dispatch(pushOrder(saladOrder));
    thunkAPI.dispatch(calculate());
});

export const addNewSalad = createAsyncThunk("addNewSalad", async (name, thunkAPI) => {
    const { reserve } = thunkAPI.getState().moleculeReducer;

    const newSalad = {
        title: name,
        price: reserve.reduce((sum, curr) => sum + curr.qty, 0),
        composition: reserve.map((element) => element._id),
        _id: new Date().getTime().toString(),
    };

    thunkAPI.dispatch(addSalad(newSalad));
    thunkAPI.dispatch(getComposition(newSalad));
    thunkAPI.dispatch(createClone());
});
