import { actionTypes } from '../constants';

export default navId => ({
  type: actionTypes.DROPDOWN_CLICKED,
  navId,
});
