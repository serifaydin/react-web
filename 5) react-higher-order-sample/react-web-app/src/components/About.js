import React from 'react';
import Renkler from '../HigherComponents/Renkler'

const About =(props)=>{

/*     setTimeout(()=>{
        props.history.push('/');
    },2000) */

    return(
        <div className="container">
            <h4 className="center">Hakkımda</h4>
            <p>Hakkımda yazıları</p>
        </div>
    )
}

export default Renkler(About);