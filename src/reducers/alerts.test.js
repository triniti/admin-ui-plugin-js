import test from 'tape';
import deepFreeze from 'deep-freeze';
import { actionTypes } from '../constants';
import dismissAlert from '../actions/dismissAlert';
import reducer, { initialState } from './alerts';

test('reducer:: alerts:: send Alert reducer tests', (t) => {
  deepFreeze(initialState);
  t.deepEqual(initialState, reducer(undefined, {}), 'it should return initial state when state is undefined');

  const prevState = [];
  const expectedFirstUpdatedState = [{ id: 123, type: 'test-alert', delay: 1000 }];
  const expectedSecondUpdatedState = [{ id: 123, type: 'test-alert', delay: 1000 }, { id: 456, type: 'test-alert2', delay: 3000 }];
  const expectedFinalUpdatedState = [{ id: 456, type: 'test-alert2', delay: 3000 }];

  deepFreeze(prevState);
  deepFreeze(expectedFirstUpdatedState);
  deepFreeze(expectedSecondUpdatedState);
  deepFreeze(expectedFinalUpdatedState);
  t.deepEqual(
    reducer(prevState, { type: actionTypes.ALERT_SENT, alert: { id: 123, type: 'test-alert', delay: 1000 } }),
    expectedFirstUpdatedState,
    'it should add a new alert object in the state',
  );

  t.deepEqual(
    reducer(expectedFirstUpdatedState, { type: actionTypes.ALERT_SENT, alert: { id: 456, type: 'test-alert2', delay: 3000 } }),
    expectedSecondUpdatedState,
    'it should add a new alert object at the end of previous state',
  );

  t.deepEqual(
    reducer(expectedSecondUpdatedState, dismissAlert(123)),
    expectedFinalUpdatedState,
    'it should dismiss the alert of a given "id"',
  );

  t.end();
});
