import createReducer from '@triniti/app/redux/createReducer';
import { actionTypes } from '../constants';

const {
  DROPDOWN_CLICKED,
  DROPDOWN_TOGGLED,
  MAIN_NAV_TOGGLED,
} = actionTypes;

export const initialState = {
  isOpen: false,
  activeSections: [],
  currentSection: '',
};

const onDropdownClicked = (state, action) =>
  Object.assign({}, state, {
    currentSection: action.navId,
  });

const onMainNavToggled = state =>
  Object.assign({}, state, {
    isOpen: !state.isOpen,
  });

const onDropdownToggled = (state, action) => {
  const { activeSections } = state;
  let updatedActiveSections = [];

  if (activeSections.includes(action.navId)) {
    const index = activeSections.indexOf(action.navId);
    updatedActiveSections = [
      ...activeSections.slice(0, index),
      ...activeSections.slice(index + 1),
    ];
  } else {
    updatedActiveSections = [
      ...activeSections,
      action.navId,
    ];
  }

  return Object.assign({}, state, {
    activeSections: updatedActiveSections,
    currentSection: action.navId,
  });
};

export default createReducer(initialState, {
  [DROPDOWN_CLICKED]: onDropdownClicked,
  [DROPDOWN_TOGGLED]: onDropdownToggled,
  [MAIN_NAV_TOGGLED]: onMainNavToggled,
});
