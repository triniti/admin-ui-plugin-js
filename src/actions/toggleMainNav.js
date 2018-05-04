import { actionTypes } from '../constants';

export default isOpen => ({
  type: actionTypes.MAIN_NAV_TOGGLED,
  isOpen,
});
