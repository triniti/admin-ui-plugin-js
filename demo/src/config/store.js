import { createStore, combineReducers } from 'redux';
import reducers from '../../../src/reducers';

const adminUi = combineReducers({ adminUi: reducers });
export default createStore(adminUi);
