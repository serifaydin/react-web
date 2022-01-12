import { SAYAC_ARTTIR } from '../Types'

const CountReducer = (state, action) => {
    switch (action.type) {
        case SAYAC_ARTTIR:
            return state + 1;
        default:
            return state;
    }

}

export default CountReducer;