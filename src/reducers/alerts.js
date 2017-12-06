import createReducer from '@triniti/app/redux/createReducer';
import { actionTypes } from '../constants';

const {
  ALERT_RECEIVED,
  ALERT_REMOVED,
} = actionTypes;

export const initialState = [];

const onAlertReceived = (state, action) => {
  const prevState = state.slice();
  prevState.push(action.message);
  return prevState;
};

const onAlertRemoved = (state, action) => {
  debugger;
}

export default createReducer(initialState, {
  [ALERT_RECEIVED]: onAlertReceived,
  [ALERT_REMOVED]: onAlertRemoved,
});
