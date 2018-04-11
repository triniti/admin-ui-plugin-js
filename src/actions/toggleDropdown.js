import { actionTypes } from '../constants';

export default (navId, routeChangeTriggered = true) => ({
  type: actionTypes.DROPDOWN_TOGGLED,
  navId,
  routeChangeTriggered,
});
