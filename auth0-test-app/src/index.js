import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Object} from "core-js";
import Auth from './Auth';

let state={};

window.setState=(changes) => {
  state = Object.assign({},state,changes);

  ReactDOM.render(
    <React.StrictMode> 
      <App {...state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const auth = new Auth();

/**eslint no-restricted-globals:0 */
let initialState={
  isim:"AOS",
 // eslint-disable-next-line no-restricted-globals
 location:location.pathname.replace(/^\/?|\/$/g,""),
 auth
}

window.setState(initialState);