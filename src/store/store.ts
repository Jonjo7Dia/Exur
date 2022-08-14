import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './reducers/combinedReducers';
import thunk from 'redux-thunk';

export const store = createStore(
    combinedReducers,
    {},
    applyMiddleware(thunk)
);