import { call, put, select, take } from 'redux-saga/effects';
import changeCurrentSection from '../actions/changeCurrentSection';
import getCurrentMainSection from '../selectors/getCurrentMainSection';
import { actionTypes } from '../constants';

export default function* (action) {
  // const { navId, to, history } = action;
  const currentNavId = yield select(getCurrentMainSection);

  if ((window.innerWidth >= 1024) && !!action.to) {
    yield call([action.history, 'push'], action.to);
    yield take(actionTypes.ROUTE_DID_CHANGED);

    if (currentNavId !== action.navId) {
      yield put(changeCurrentSection(action.navId));
    }
  }
}
