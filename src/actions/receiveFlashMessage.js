import { actionTypes } from '../constants';

export default message => ({
  type: actionTypes.FLASH_MESSAGE_RECEIVED,
  message,
});
