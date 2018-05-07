import { actionTypes } from '../constants';

export default (navId, history, nextLocation) => ({
  type: actionTypes.CHANGE_ROUTE_REQUESTED,
  navId,
  history,
  nextLocation,
});
