import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const {
  MAIN_NAV_TOGGLED,
} = actionTypes;

export const initialState = {
  isOpen: false,
  currentSection: '',
  nextSection: null,
};

const onMainNavToggled = (state, action) => {
  const isOpen = typeof action.isOpen === 'undefined' ? !state.isOpen : !!action.isOpen;

  return Object.assign({}, state, { isOpen });
};

export default createReducer(initialState, {
  [MAIN_NAV_TOGGLED]: onMainNavToggled,
});
