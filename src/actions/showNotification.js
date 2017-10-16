import { actionTypes } from '../constants';

export default message => ({
  type: actionTypes.SHOW_NOTIFICATION_REQUESTED,
  message,
});
