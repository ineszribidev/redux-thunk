
import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
    yield takeEvery("DATA_REQUESTED", workerSaga);//takeevery action s'apelle data requested
}

function* workerSaga(action) {
    try {
        // pass the action payload to getData
        const payload = yield call(getData, action.payload.url);//on call a function named getdata
        yield put({ type: "DATA_LOADED", payload });//on dspatch an action named data loaded
    } catch (e) {
        yield put({ type: "API_ERRORED", payload: e });
    }
}

function getData(url) {
    return fetch(url).then(response => response.json());
}