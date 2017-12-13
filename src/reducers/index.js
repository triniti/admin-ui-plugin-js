import { combineReducers } from 'redux';
import alerts from './alerts';
import mainNav from './mainNav';
import theme from './theme';
import userNav from './userNav';

export default combineReducers({
  alerts,
  mainNav,
  theme,
  userNav,
});
