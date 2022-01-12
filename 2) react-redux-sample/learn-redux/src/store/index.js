import { createStore, combineReducers } from 'redux'
import CounterReducer from './reducers/CounterReducer'
import listReducer from './reducers/ListReducer'

const reducers = combineReducers({
    counter: CounterReducer,
    list: listReducer
});

const store = createStore(reducers);

export default store;