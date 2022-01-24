import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from './features/user';
import themeReducer from './features/theme';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));