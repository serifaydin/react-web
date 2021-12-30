import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const Info = (props) => {
    return (
        <ChallengeContext.Consumer>
            {(challengeContext) => (
                <ThemeContext.Consumer>
                    {(themeContext) => {
                        const theme = themeContext.getTheme();
                        const challenge = challengeContext.challenges.find(c => c.id === challengeContext.selected).text;
                        return (
                            <div className={`card text-center  ${theme.card} border`}>
                                <div className="card-header">
                                    <h3>Yazma Hızı Testi</h3>
                                </div>
                                <div className="card-body">
                                    <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.</p>
                                    <p>Testi bitirmek için <span className="badge badge-info">'Ctrl' + 'Enter'</span> kombinasyonunu kullanınız.</p>
                                    <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                                </div>
                                <div className="card-footer">
                                    {challenge}
                                </div>
                            </div>
                        )
                    }}
                </ThemeContext.Consumer>
            )}
        </ChallengeContext.Consumer>
    );
}

export default Info;