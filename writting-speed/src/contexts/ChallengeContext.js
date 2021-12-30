import React, { createContext, useState } from "react";

export const ChallengeContext = createContext();

const initState = {
    challenges: [
        {
            id: 1,
            text: "Şerif Aydin",
            difficulty: "easy"
        },
        {
            id: 2,
            text: "Şerif Aydin Software Architect",
            difficulty: "hard"
        },
        {
            id: 3,
            text: "Şerif Aydin Software Architecture Leader",
            difficulty: "hard"
        }
    ],
    selected: 2,
    index: 5
}

const ChallengeContextProvider = (props) => {
    const [state, setChannels] = useState(initState);

    const addChallenge = (challenge) => {
        let id = state.index;
        const newChallenge = { ...challenge, id }
        setChannels({
            ...state,
            challenges: [...state.challenges, newChallenge],
            index: id + 1
        })
    }

    return (
        <ChallengeContext.Provider value={{ ...state, addChallenge: addChallenge }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}

export default ChallengeContextProvider;