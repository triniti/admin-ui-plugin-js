import { combineReducers } from 'redux';
import alerts from './alerts';
import theme from './theme';

export default combineReducers({
  alerts,
  theme,
});
