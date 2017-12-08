import { actionTypes } from '../constants';

export default (alert => ({
  type: actionTypes.ALERT_RECEIVED,
  alert,
}));
