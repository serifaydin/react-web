import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/features/theme/ThemeSlice'

function ThemeComponent() {

    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    return <div>
        <input type="text" onChange={(e) => {setColor(e.target.value)}} />
        <button onClick={()=>{
            dispatch(setTheme(color))
        }}>Set Color</button>
    </div>;
}

export default ThemeComponent;