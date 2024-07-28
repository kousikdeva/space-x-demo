import { all } from "redux-saga/effects"
import { watchGetLauncher, watchGetUpcomingLauncher } from "../sagaWatcher/launchersSaga"
import { watchGetAllHistory, watchGetHistory } from "../sagaWatcher/historySaga"

function* rootSaga() {
    yield all([watchGetUpcomingLauncher(), watchGetLauncher(), watchGetAllHistory(), watchGetHistory()])
}
export default rootSaga