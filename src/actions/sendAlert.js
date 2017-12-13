import { actionTypes } from '../constants';

export default ({
  isDismissible = false,
  delay = false,
  link = {
    openInNewTab: false,
    text: '',
    href: '',
  },
  message = 'default message, none supplied',
  type = 'warning',
}) => ({
  type: actionTypes.ALERT_SENT,
  alert: {
    id: Math.ceil(Math.random() * 10000000),
    isDismissible,
    delay,
    link,
    message,
    type,
  },
});
