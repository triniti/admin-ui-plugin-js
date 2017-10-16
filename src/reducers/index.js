import { combineReducers } from 'redux';
import theme from './theme';
import flashMessage from './flashMessage';
import mainNav from './mainNav';
import userNav from './userNav';

export default combineReducers({
  theme,
  flashMessage,
  mainNav,
  userNav,
});
