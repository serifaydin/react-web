import React, { Component } from 'react';
const initialState = {
    entry: '',
    isDisabled: false,
    start: null,
    end: null
}
class ChallengeInput extends Component {
    challenge = this.props.challenge
    state = initialState
    keyMap = []
    changeHandler = (e) => {
        let { start } = this.state;
        if (start === null) {
            start = new Date().getTime();
        }
        if (e.target.value === '') {
            this.resetState();
        } else if (this.challenge.length + 1 <= e.target.value.length) {
            this.stopAndCheck()
        } else {
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value,
                start
            })
        }

    }

    resetState = () => {
        this.setState(initialState);
    }
    stopAndCheck = () => {
        let end = new Date().getTime();
        const { entry, start } = this.state;
        const result = this.checkEntry(entry, end, start)
        this.props.setResult(result);
        this.setState({
            ...this.state,
            isDisabled: true,
            end
        })
    }
    keyDownHandler = (e) => {
        this.keyMap[e.keyCode] = e.type === "keydown"
        if (this.keyMap[17] && this.keyMap[13]) {
            this.stopAndCheck()
        }
    }

    checkEntry = (entry, end, start) => {
        let sum = 0;
        const arr_challenge = this.challenge.split(' ');
        const arr_entry = entry.split(' ');
        arr_challenge.forEach((c, i) => {
            for (let j = 0; j < c.length; j++) {
                if (arr_entry[i] && c[j] === arr_entry[i][j]) {
                    sum = sum + 1;
                }
            }
        });
        sum = sum + arr_entry.length - 1;
        let accuracy = (sum * 100 / this.challenge.length);
        let duration = (end - start) / 1000;
        let wordsPerMinute = (entry.length * 60) / (6 * duration);

        return {
            duration,
            accuracy,
            wordsPerMinute
        }

    }

    keyUphandler = () => {
        this.keyMap = []
    }
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUphandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler);
        document.removeEventListener("keyup", this.keyUphandler);
    }
    render() {
        const { entry, isDisabled } = this.state;
        return (
            <React.Fragment>
                <div className="input-group mb-3">
                    <input type="text" name="entry" autoComplete="off" value={entry} disabled={isDisabled} onChange={this.changeHandler} className="form-control" placeholder="Metni giriniz" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary rounded-right" onClick={this.resetState} type="button" id="reset">sil</button>
                    </div>
                    <br />
                </div>
                <small className="text-muted">{`${this.challenge.length - entry.length} / ${this.challenge.length}`}</small>
            </React.Fragment>
        );
    }
}

export default ChallengeInput;