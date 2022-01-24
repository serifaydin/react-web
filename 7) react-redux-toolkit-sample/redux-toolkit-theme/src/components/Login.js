import React from 'react';
import { useDispatch } from "react-redux"
import { login, logout } from '../features/user'

function Login() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "şerif", age: "31", email: "ww" }));
            }}>Login</button>

            <button onClick={() => {
                dispatch(logout());
            }}>LOGOUT</button>
        </div>
    );
}

export default Login;