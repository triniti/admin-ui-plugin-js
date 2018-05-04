import { actionTypes } from '../constants';

export default (navId, to, history) => ({
  type: actionTypes.DROPDOWN_TITLE_CLICKED,
  navId,
  to,
  history,
});
