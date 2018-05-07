import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const {
  CHANGE_ROUTE_CANCELLED,
  CHANGE_ROUTE_REQUESTED,
  DROPDOWN_TITLE_CLICKED,
  MAIN_NAV_TOGGLED,
  ROUTE_DID_CHANGED,
} = actionTypes;

export const initialState = {
  isOpen: false,
  activeSections: [],
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

/**
 * Handle the dropdown toggle on and off when in mobile view
 * @param state
 * @param action
 * @returns {*}
 */
const onDropdownTitleClicked = (state, action) => {
  const newState = Object.assign({}, state);

  const { activeSections } = newState;
  const { navId } = action;

  if (activeSections.includes(navId)) {
    const index = activeSections.indexOf(navId);
    newState.activeSections = [
      ...activeSections.slice(0, index),
      ...activeSections.slice(index + 1),
    ];
  } else {
    newState.activeSections = [
      ...activeSections,
      navId,
    ];
  }

  return newState;
};

export default createReducer(initialState, {
  [CHANGE_ROUTE_CANCELLED]: onChangeRouteCancelled,
  [CHANGE_ROUTE_REQUESTED]: onChangeRouteRequested,
  [DROPDOWN_TITLE_CLICKED]: onDropdownTitleClicked,
  [MAIN_NAV_TOGGLED]: onMainNavToggled,
  [ROUTE_DID_CHANGED]: onRouteDidChanged,
});
