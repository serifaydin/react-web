import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction,logoutAction } from '../store/features/Login/LoginSlice'

function LoginComponent() {

    const dispatch = useDispatch();

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => {
                dispatch(loginAction({ name: "şerif", surname: "aydin" }))
            }}>Login</button>
            <button onClick={()=>{
                dispatch(logoutAction())
            }}>Logout</button>
        </div>
    );
}

export default LoginComponent;