import { all } from "redux-saga/effects"
import changeName from '../middleware/testSaga'

function* rootSaga() {
    yield all([changeName()])
}
export default rootSaga