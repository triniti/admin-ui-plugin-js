import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const { USER_NAV_TOGGLED, ASIDE_ACTIVE_TAB_CHANGED } = actionTypes;

export const initialState = {
  isOpen: false,
  activeTab: '1',
};

const onUserNavToggled = state =>
  Object.assign({}, state, {
    isOpen: !state.isOpen,
  });

const onActiveTabChanged = (state, action) =>
  Object.assign({}, state, {
    activeTab: action.tabId,
  });

export default createReducer(initialState, {
  [USER_NAV_TOGGLED]: onUserNavToggled,
  [ASIDE_ACTIVE_TAB_CHANGED]: onActiveTabChanged,
});
