import React, { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';

const SelectChallenge = () => {
    const { challenges, selected,setSelected } = useContext(ChallengeContext)
    const challengeList = challenges.map(c => {
        return <option key={c.id} value={c.id}>{`${c.text} | ${c.difficulty} | ${c.text.length}`}</option>
    })

    const changeHandler =(e)=>{
        setSelected(Number(e.target.value))
    }

    return(
        <select className="form-control" name="chl" id="chl" value={selected} onChange={changeHandler}>
            {challengeList}
        </select>
    );
}

export default SelectChallenge;