import { actionTypes } from '../constants';

export default tabId => ({
  type: actionTypes.ASIDE_ACTIVE_TAB_CHANGED,
  tabId,
});
