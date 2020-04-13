import { all, call } from 'redux-saga/effects';

import { runClockSaga } from './clock';

export default function* rootSaga() {
  yield all([
    call(runClockSaga),
    // If API hit
    // takeLatest(actionTypes, sagaFunction)
  ]);
}
