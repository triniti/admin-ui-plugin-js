import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import preloadedState from './config/preloadedState';
import reducers from '../../src/reducers';
import saga from '../../src/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ adminUi: reducers }),
  preloadedState,
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(saga);
