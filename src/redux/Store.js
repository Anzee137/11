import { createStore, combineReducers, applyMiddleware } from 'redux';
import headerReducer from "./headerReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    headerReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;