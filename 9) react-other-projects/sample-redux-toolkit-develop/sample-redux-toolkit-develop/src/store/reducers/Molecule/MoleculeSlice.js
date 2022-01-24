import { createSlice } from "@reduxjs/toolkit";
import { fetchMolecules, fetchMolecule } from "./MoleculeThunks";

const initialState = {
    molecules: [],
    cloneMolecules: [],
    molecule: {},
    composition: [],
    reserve: [],
    loading: false,
    error: "",
};

export const MoleculeSlice = createSlice({
    name: "molecule",
    initialState,
    reducers: {
        getComposition(state, action) {
            if (action.payload && action.payload.composition) {
                state.composition = [];
                state.molecules.forEach((molecule) => {
                    if (action.payload.composition.includes(molecule._id)) {
                        const count = action.payload.composition.filter((x) => x === molecule._id).length;
                        const moleculeWithCount = { ...molecule, count };
                        state.composition.push(moleculeWithCount);
                    }
                });
            }
        },
        updateQuantity(state) {
            state.molecules.forEach((molecule) => {
                const moleculeFromComposition = state.composition.find((x) => x._id === molecule._id);
                if (moleculeFromComposition) {
                    molecule.qty -= moleculeFromComposition.count || 1;
                }
            });
        },
        pushReverse(state, action) {
            state.reserve.push(action.payload);
        },
        resetReverse(state) {
            state.reserve = [];
        },
        createClone(state) {
            state.cloneMolecules = state.molecules;
        },
        updateClone(state, action) {
            state.cloneMolecules.find((molecule) => {
                if (molecule._id === action.payload._id) {
                    if (molecule.available === undefined) {
                        molecule.available = molecule.qty;
                    }
                    molecule.qty--;
                    molecule.count = (molecule.count || 0) + 1;
                    return true;
                }
            });
        },
        resetClone(state) {
            state.cloneMolecules = [];
        },
    },
    extraReducers: {
        [fetchMolecules.fulfilled.type]: (state, actions) => {
            state.loading = false;
            state.error = "";
            state.molecules = actions.payload.result;
        },
        [fetchMolecules.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchMolecules.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchMolecule.fulfilled.type]: (state, actions) => {
            state.loading = false;
            state.error = "";
            state.molecule = actions.payload.result;
        },
        [fetchMolecule.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchMolecule.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const moleculeReducer = MoleculeSlice.reducer;
export const { getComposition, updateQuantity, pushReverse, resetReverse, createClone, resetClone, updateClone } = MoleculeSlice.actions;
