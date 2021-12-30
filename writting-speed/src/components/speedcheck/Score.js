import React from 'react';
import ScoreCard from './ScoreCard';
import { ScoreTypes } from '../data/Types';

const Score = ({ values }) => {
    return (
        <div class="row">
                        {
                            Object.entries(values).map(([key, value]) => {
                                return <ScoreCard type={ScoreTypes[key]} key={key} value={value} />
                            })
                        }
        </div>
    );
}

export default Score;