import { combineReducers, createStore } from 'redux';
import preloadedState from './config/preloadedState';
import reducers from '../../src/reducers';

export default createStore(combineReducers({ adminUi: reducers }), preloadedState);
