import React, { useState, useContext, useEffect } from 'react';
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { ThemeContext } from "../../contexts/ThemeContext";
const initState = {
    text: '',
    difficulty: ''
}
const AddChallenge = () => {
    const [challenge, setChallenge] = useState(initState);
    //const [deneme, setDeneme] = useState({name:''});

    const { dispatch } = useContext(ChallengeContext)
    const theme = useContext(ThemeContext).getTheme();

    const changeHandler = (e) => {
        setChallenge({
            ...challenge,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_CHALLENGE', challenge})
        //addChallenge(challenge)
        setChallenge(initState)
    }

   /*  useEffect(()=>{
        console.log('state güncellendi',deneme);
    },[deneme]) */

    return (
        <div className={`card text-center  ${theme.card} border`}>
            <div className="card-header">
                <h4 className="card-title">Metin Ekle</h4>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Metin:</label>
                        <input type="text" name="text" className="form-control" onChange={changeHandler} value={challenge.text} autoComplete="off" placeholder="Metni giriniz" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Zorluk: </label>
                        <select name="difficulty" id="difficulty" className="form-control" onChange={changeHandler} required value={challenge.difficulty}>
                            <option value="">Seçiniz</option>
                            <option value="easy">Kolay</option>
                            <option value="medium">Normal</option>
                            <option value="hard">Zor</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-success btn-block" type="submit">Kaydet</button>
                </form>
            </div>
        </div>
    );
}

export default AddChallenge;