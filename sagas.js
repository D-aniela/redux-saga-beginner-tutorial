import { all, call, put, takeEvery } from 'redux-saga/effects'

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

// export function* helloSaga() {
function* helloSaga() {
  console.log('Hello Sagas!')
}

// worker saga: perform the async increment task
export function* incrementAsync() {
  // yield delay(1000)
  // use the call Effect to call indirectly for test
  yield call(delay, 1000) //=> {CALL: {fn: delay, args: [1000]}}
  yield put({ type: 'INCREMENT' }) //=> {PUT: {type: 'INCREMENT'}}
}

// watcher saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// export functions in rootSaga func
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()])
}
