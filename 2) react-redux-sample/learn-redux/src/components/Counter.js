import React from "react";
import { useSelector } from 'react-redux'
const Counter = () => {
    const { counter, list } = useSelector(state => state);
    return (
        <div>
            {counter}
            <br />
            {list.map(item => (
                <li key={item}>{item}</li>
            ))}
        </div>
    )
}
export default Counter;