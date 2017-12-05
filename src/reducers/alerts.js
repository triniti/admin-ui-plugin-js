import createReducer from '@triniti/app/redux/createReducer';
import { actionTypes } from '../constants';

const {
  ALERT_RECEIVED,
} = actionTypes;

export const initialState = [];

const onAlertReceived = (state, action) => {
  const prevState = state.slice();
  prevState.push(action.message);
  return prevState;
};

export default createReducer(initialState, {
  [ALERT_RECEIVED]: onAlertReceived,
});
