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

const initResult = [
        {
            id: 1,
            challengeId: 2,
            scores: {
                duration: 2.5,
                accuracy: 83,
                wordsPerMinute: 55
            }
        }
    ]

const ChallengeContextProvider = (props) => {
    const [state, setChallenges] = useState(initState);
    const [results, setResults] = useState(initResult);

    const addChallenge = (challenge) => {
        let id = state.index;
        const newChallenge = { ...challenge, id }
        setChallenges({
            ...state,
            challenges: [...state.challenges, newChallenge],
            index: id + 1
        })
    }

    const addResult =(result)=>{
        setResults([...results, result])
    }

    const setSelected = (id) => {
        setChallenges({
            ...state,
            selected: id
        })
    }

    return (
        <ChallengeContext.Provider value={{ ...state, results:[...results], addChallenge, setSelected, addResult }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}

export default ChallengeContextProvider;