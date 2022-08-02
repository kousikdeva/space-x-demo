import { put, takeEvery } from "redux-saga/effects"
import { CHANGE_NAME, SET_NAME } from "../constants/actionType"

function* setName(params) {
    try {
        yield put({ type: SET_NAME, payload: params })
    } catch (err) {
        console.error(err)
    }
}

function* changeName() {
    yield takeEvery(CHANGE_NAME, setName)
}

export default changeName