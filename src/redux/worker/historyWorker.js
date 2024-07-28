import { call, put } from "redux-saga/effects";
import { randomImages } from "../../mock/rocketsImgDetails";
import historyServices from "../../service/historyServices";
import { dateFormat, randomObject } from "../../utils/helper";
import { getAllHistory, getHistory } from "../action/historyAction";

function* fetchAllHistory() {
    try {
        const { data } = yield call(historyServices.listHistories)
        const newData = data.map(item => ({ ...item, image: randomObject(randomImages).image }))
        yield put(getAllHistory(newData))
    } catch (e) {
        console.log(e);
    }

}
function* fetchHistory(params) {
    try {
        const { id } = params.payload
        const { data } = yield call(historyServices.getHistory, { id })
        yield put(getHistory({ ...data, image: randomObject(randomImages).image, launch_date: dateFormat(data.event_date_utc) }))
    } catch (e) {
        console.log(e);
    }

}

export { fetchAllHistory, fetchHistory }