import createReducer from '@triniti/app/redux/createReducer';
import { actionTypes } from '../constants';

const {
  FLASH_MESSAGE_RECEIVED,
  NOTIFICATION_TOGGLED,
  SHOW_NOTIFICATION_REQUESTED,
  HIDE_NOTIFICATION_REQUESTED,
} = actionTypes;

export const initialState = {
  message: '',
  showNotification: false,
};

const onflashMessageReceived = (state, action) => (
  Object.assign({}, state, {
    message: action.message,
  })
);

const onNotificationToggled = (state, action) => (
  Object.assign({}, state, {
    showNotification: !state.showNotification,
    message: action.message || '',
  })
);

const onShowNotification = (state, action) => (
  Object.assign({}, state, {
    showNotification: true,
    message: action.message || '',
  })
);

const onHideNotification = () => initialState;

export default createReducer(initialState, {
  [FLASH_MESSAGE_RECEIVED]: onflashMessageReceived,
  [NOTIFICATION_TOGGLED]: onNotificationToggled,
  [SHOW_NOTIFICATION_REQUESTED]: onShowNotification,
  [HIDE_NOTIFICATION_REQUESTED]: onHideNotification,
});
