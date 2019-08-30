import createReducer from '@triniti/app/createReducer';
import { actionTypes } from '../constants';

const {
  ALERT_SENT,
  ALERT_DISMISSED,
} = actionTypes;

export const initialState = [];

const onAlertSent = (state, action) => [...state.slice(), action.alert];

const onAlertDismissed = (state, { id }) => state.filter((alert) => alert.id !== id);

export default createReducer(initialState, {
  [ALERT_SENT]: onAlertSent,
  [ALERT_DISMISSED]: onAlertDismissed,
});
