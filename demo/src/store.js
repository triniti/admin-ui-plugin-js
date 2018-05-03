import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import preloadedState from './config/preloadedState';
import reducers from '../../src/reducers';

export default createStore(
  combineReducers({ adminUi: reducers }),
  preloadedState,
  applyMiddleware(logger),
);
