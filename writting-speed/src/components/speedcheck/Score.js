import React from 'react';
import ScoreCard from './ScoreCard';
import { ScoreTypes } from '../data/Types';
import { useContext } from 'react/cjs/react.development';
import { ChallengeContext } from '../../contexts/ChallengeContext'
import { v4 as uuidv4 } from 'uuid';

const Score = ({ values }) => {
    const { addResult, selected } = useContext(ChallengeContext)

    const clickHandler = () => {

        const id = uuidv4();

        addResult({
            id: id,
            challengeid: selected,
            scores: values
        })
    }

    return (
        <div className="row">
            {
                Object.entries(values).map(([key, value]) => {
                    return <ScoreCard type={ScoreTypes[key]} key={key} value={value} />
                })
            }
            <button className='btn btn-outline-info btn-block' onClick={clickHandler}>Sonucu Kaydet</button>
        </div>
    );
}

export default Score;