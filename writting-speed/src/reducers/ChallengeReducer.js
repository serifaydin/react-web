export const challengeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CHALLENGE':
            let newChallenge ={
                ...action.challenge,
                id: state.index
            }
            return {
                ...state,
                challenges: [...state.challenges, newChallenge],
                index : state.index + 1
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selected:action.selected
            }

        default:
            break;
    }
}