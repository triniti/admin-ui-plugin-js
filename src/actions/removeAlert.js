import { actionTypes } from '../constants';

export default (message => ({
  type: actionTypes.ALERT_REMOVED,
  message,
}));
