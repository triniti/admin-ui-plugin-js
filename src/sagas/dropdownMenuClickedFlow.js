import { put, select, take } from 'redux-saga/effects';
import getCurrentMainSection from '../selectors/getCurrentMainSection';
import changeCurrentSection from '../actions/changeCurrentSection';
import toggleMainNav from '../actions/toggleMainNav';
import { actionTypes } from '../constants';

export default function* (action) {
  const currentNavId = yield select(getCurrentMainSection);
  yield take(actionTypes.ROUTE_DID_CHANGED);

  if (currentNavId !== action.navId) {
    yield put(changeCurrentSection(action.navId));
  }

  yield put(toggleMainNav(false));
}
