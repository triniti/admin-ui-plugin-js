import { combineReducers } from 'redux';
import alerts from './alerts';
import flashMessage from './flashMessage';
import mainNav from './mainNav';
import theme from './theme';
import userNav from './userNav';

export default combineReducers({
  alerts,
  flashMessage,
  mainNav,
  theme,
  userNav,
});
