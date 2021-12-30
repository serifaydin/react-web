import React, { Component } from 'react';
import Info from './Info';
import ChallengeInput from './ChallengeInput';
import Score from './Score';
const initState = {
    result: null
}
class SpeedCheck extends Component {
    challenge = "Mehmet Ali FIRAT";
    state = initState

    setResult = (result) => {
        this.setState({
            result
        })
    }

    render() {
        const {result} = this.state;
        return (
            <React.Fragment>
                <Info/>
                <hr />
                <ChallengeInput challenge={this.challenge} setResult={this.setResult} />
                <hr />
                {result !== null ? <Score values={this.state.result} /> : ""}
            </React.Fragment>
        );
    }
}

export default SpeedCheck;