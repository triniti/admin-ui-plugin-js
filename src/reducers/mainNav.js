import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const {
  CHANGE_ROUTE_CANCELLED,
  CHANGE_ROUTE_REQUESTED,
  MAIN_NAV_TOGGLED,
  ROUTE_DID_CHANGED,
} = actionTypes;

export const initialState = {
  isOpen: false,
  currentSection: '',
  nextSection: null,
};

const onChangeRouteCancelled = state =>
  Object.assign({}, state, {
    nextSection: '',
  });

const onChangeRouteRequested = (state, action) =>
  Object.assign({}, state, {
    nextSection: action.navId,
  });

const onRouteDidChanged = (state) => {
  const newState = { ...state };
  if (state.nextSection) {
    newState.currentSection = state.nextSection;
  }
  newState.nextSection = '';
  newState.isOpen = false;

  return newState;
};

const onMainNavToggled = (state, action) => {
  const isOpen = typeof action.isOpen === 'undefined' ? !state.isOpen : !!action.isOpen;

  return Object.assign({}, state, { isOpen });
};

export default createReducer(initialState, {
  [CHANGE_ROUTE_CANCELLED]: onChangeRouteCancelled,
  [CHANGE_ROUTE_REQUESTED]: onChangeRouteRequested,
  [MAIN_NAV_TOGGLED]: onMainNavToggled,
  [ROUTE_DID_CHANGED]: onRouteDidChanged,
});
