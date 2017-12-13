import createReducer from '@triniti/app/redux/createReducer';
import { actionTypes } from '../constants';

const {
  ALERT_SENT,
  ALERT_DISMISSED,
} = actionTypes;

export const initialState = [];

const onAlertSent = (prevState, action) => {
  const newState = prevState.slice();
  newState.push(action.alert);
  return newState;
};

const onAlertDismissed = (state, { id }) => state.filter(alert => alert.id !== id);

export default createReducer(initialState, {
  [ALERT_SENT]: onAlertSent,
  [ALERT_DISMISSED]: onAlertDismissed,
});
