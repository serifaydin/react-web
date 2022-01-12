import { LISTE_EKLE } from '../types'
const default_state = [];
const listReducer = 
(state = default_state, action) => {
    switch (action.type) {
        case LISTE_EKLE:
            return [...state, action.payload];
        default:
            return state;
    }
};
export default listReducer; 