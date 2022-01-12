import React from "react";
import AddChallenge from "./AddChallenge";
import ChallengeList from "./ChallengeList";

const Challenges = ()=>{
    return(
        <React.Fragment>
            <AddChallenge/>
            <hr/>
            <ChallengeList/>
        </React.Fragment>
    )
}

export default Challenges;