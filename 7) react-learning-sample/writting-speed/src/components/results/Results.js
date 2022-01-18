import React, { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { ThemeContext } from '../../contexts/ThemeContext';
const Results = () => {
    const { results } = useContext(ChallengeContext);
    const theme = useContext(ThemeContext).getTheme();
    const resultRows = results ? results.map(r => {
        return <tr key={r.id}>
            <td>{r.challengeId}</td>
            <td>% {r.scores.accuracy.toFixed(2)}</td>
            <td>{r.scores.duration.toFixed(2)} sn</td>
            <td>{r.scores.wordsPerMinute.toFixed(0)} k/dk</td>
        </tr>
    }) : (<tr >
        <td style={{ columnSpan: 4 }}>Veri bulunamadı</td>
    </tr>
        )
    return (
        <div className={`card text-center  ${theme.card} border`}>
            <div className="card-header">
                <h4 className="card-title">Sonuçlarım</h4>
            </div>
            <div className="card-body p-1">
                <table className={`table table-hover m-0 ${theme.table}`}>
                    <thead>
                        <tr>
                            <th>MetinId</th>
                            <th>Doğruluk</th>
                            <th>Süre</th>
                            <th>DBK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            resultRows
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Results;