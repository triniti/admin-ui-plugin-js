import { combineReducers } from 'redux';
import flashMessage from './flashMessage';
import mainNav from './mainNav';
import theme from './theme';
import userNav from './userNav';

export default combineReducers({
  flashMessage,
  mainNav,
  theme,
  userNav,
});
