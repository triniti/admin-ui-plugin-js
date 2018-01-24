import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

export const initialState = 'light';

const { NEW_THEME_REQUESTED } = actionTypes;

const onNewTheme = (state, action) => action.theme;

export default createReducer(initialState, {
  [NEW_THEME_REQUESTED]: onNewTheme,
});
