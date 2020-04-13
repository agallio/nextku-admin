import { take, put, delay } from 'redux-saga/effects';

import { actionTypes, tickClock } from '../actions';

export function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}
