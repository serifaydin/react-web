import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux'
import {Provider} from 'react-redux'

function isimReducer(state = 'ali', action) {

  switch (action.type) {
    case 'ISIM_GUNCELLE':
      return action.payload;
    default:

      return state
  }
}

function soyisimReducer(state = 'hazır', action) {
  switch (action.type) {
    case 'SOYISIM_GUNCELLE':
      return action.payload;
    default:

      return state
  }
}

const updateIsimVerileri = {
  type: "ISIM_GUNCELLE",
  payload: "ali osman"
}

const updateSoyisimVerileri = {
  type: "SOYISIM_GUNCELLE",
  payload: "hazir2"
}

const reducers = combineReducers({
  isim: isimReducer,
  soyisim: soyisimReducer
})

const store = createStore(reducers);
store.dispatch(updateIsimVerileri);
store.dispatch(updateSoyisimVerileri);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);