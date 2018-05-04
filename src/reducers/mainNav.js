import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const {
  CURRENT_SECTION_CHANGED,
  DROPDOWN_TITLE_CLICKED,
  MAIN_NAV_TOGGLED,
} = actionTypes;

export const initialState = {
  isOpen: false,
  activeSections: [],
  currentSection: '',
};

const onCurrentSectionChanged = (state, action) =>
  Object.assign({}, state, {
    currentSection: action.navId,
  });

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
  });
};

export default createReducer(initialState, {
  [CURRENT_SECTION_CHANGED]: onCurrentSectionChanged,
  [DROPDOWN_TITLE_CLICKED]: onDropdownTitleClicked,
  [MAIN_NAV_TOGGLED]: onMainNavToggled,
});
