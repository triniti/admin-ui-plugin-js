import { actionTypes } from '../constants';

export default ({
  isDismissible = false,
  delay = false,
  link = false,
  message = 'default message, none supplied',
  type = 'warning',
}) => ({
  type: actionTypes.ALERT_RECEIVED,
  alert: {
    id: Math.ceil(Math.random() * 10000000),
    isDismissible,
    delay,
    link,
    message,
    type,
  },
});
