import { combineReducers } from 'redux';
import alerts from './alerts';
import theme from './theme';
import userNav from './userNav';

export default combineReducers({
  alerts,
  theme,
  userNav,
});
