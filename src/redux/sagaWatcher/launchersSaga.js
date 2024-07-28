import { takeEvery } from "redux-saga/effects"
import { GET_LAUNCHER, GET_UPCOMING_LAUNCHERS } from "../../constants/actionType"
import { fetchGetLauncher, fetchUpcomingLaunchers } from "../worker/launcherWorker"

function* watchGetUpcomingLauncher() {
    yield takeEvery(GET_UPCOMING_LAUNCHERS, fetchUpcomingLaunchers)
}
function* watchGetLauncher() {
    yield takeEvery(GET_LAUNCHER, fetchGetLauncher)
}

export { watchGetUpcomingLauncher, watchGetLauncher }