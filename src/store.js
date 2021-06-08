import {createStore, combineReducers } from 'redux';
import { viewed } from './reducers';

const reducers = {
    viewed,
}

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore(rootReducers);