import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { arttir, azalt } from '../store/actions/CounterAction'
import { ekle } from '../store/actions/ListAction'
const Buttons = () => {
    const { counter } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(arttir())}>+</button>
            <button onClick={() => dispatch(azalt())}>-</button>
            <button onClick={() => dispatch(ekle(counter))}>liste ekle</button>
        </div>
    )
}
export default Buttons;