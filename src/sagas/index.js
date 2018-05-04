import { all, fork, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../constants';
import dropdownMenuClickedFlow from './dropdownMenuClickedFlow';
import dropdownTitleClickedFlow from './dropdownTitleClickedFlow';

function* watchDropdownMenuClickedFlow() {
  yield takeLatest(actionTypes.DROPDOWN_MENU_CLICKED, dropdownMenuClickedFlow);
}

function* watchDropdownTitleClickedFlow() {
  yield takeLatest(actionTypes.DROPDOWN_TITLE_CLICKED, dropdownTitleClickedFlow);
}

export default function* rootSaga() {
  yield all([
    fork(watchDropdownMenuClickedFlow),
    fork(watchDropdownTitleClickedFlow),
  ]);
}
