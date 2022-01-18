import React, { useContext } from "react";
import {ThemeContext} from '../../contexts/ThemeContext'
import {ChallengeContext} from '../../contexts/ChallengeContext'

const ChallengeList = () => {
    const theme = useContext(ThemeContext).getTheme();
    const {challenges} = useContext(ChallengeContext);
    const challengeRows = challenges.map(s => {
        return <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.text}</td>
            <td>{s.difficulty}</td>
        </tr>
    })

    return (
        <div className={`card text-center  ${theme.card} border`}>
        <div className="card-header">
            <h4 className="card-title">Metinler</h4>
        </div>
        <div className="card-body p-1">
            <table className={`table ${theme.table} table-striped table-hover m-0`}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Metin</th>
                        <th>Zorluk</th>
                    </tr>
                </thead>
                <tbody>
                    {challengeRows}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ChallengeList;