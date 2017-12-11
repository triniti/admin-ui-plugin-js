import { actionTypes } from '../constants';

export default ({ isDismissible, delay, link, message, type }) => ({
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
