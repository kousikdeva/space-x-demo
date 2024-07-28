import { call, put } from "redux-saga/effects"
import { getLauncher, getUpcomingLaunchers } from "../action/launchersAction";
import launchesServices from "../../service/launchesService";
import { addImg, dateFormat, randomObject } from "../../utils/helper";
import { randomImages } from "../../mock/rocketsImgDetails";

function* fetchUpcomingLaunchers() {
    try {
        const { data } = yield call(launchesServices.upcomingLaunches)
        yield put(getUpcomingLaunchers(addImg(data)))
    } catch (e) {
        console.log(e);
    }

}

function* fetchGetLauncher(params) {
    const { id } = params.payload
    try {
        const { data } = yield call(launchesServices.getLauncher, { id })
        yield put(getLauncher({ ...data, image: randomObject(randomImages).image, launch_date: dateFormat(data.launch_date_utc) }))
    } catch (e) {
        console.log(e);
    }

}

export { fetchUpcomingLaunchers, fetchGetLauncher }