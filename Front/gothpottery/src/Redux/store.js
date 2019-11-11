import { createStore, compose, applyMiddleware } from 'redux';
import defaultReducer from './reducers.js';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

//store setup
const store = createStore(defaultReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));

export default store;