import { actionTypes } from '../constants';

export default navId => ({
  type: actionTypes.CURRENT_SECTION_CHANGED,
  navId,
});
