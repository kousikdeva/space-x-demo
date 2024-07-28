import { takeEvery } from "redux-saga/effects";
import { GET_ALL_HISTORY, GET_HISTORY } from "../../constants/actionType";
import { fetchAllHistory, fetchHistory } from "../worker/historyWorker";

function* watchGetAllHistory() {
    yield takeEvery(GET_ALL_HISTORY, fetchAllHistory)
}
function* watchGetHistory() {
    yield takeEvery(GET_HISTORY, fetchHistory)
}

export { watchGetAllHistory, watchGetHistory }