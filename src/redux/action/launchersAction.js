import { GET_LAUNCHER_SUCCESS, GET_UPCOMING_LAUNCHERS_SUCCESS } from "../../constants/actionType"

export const getUpcomingLaunchers = (payload) => {
    return {
        type: GET_UPCOMING_LAUNCHERS_SUCCESS,
        payload
    }
}
export const getLauncher = (payload) => {
    return {
        type: GET_LAUNCHER_SUCCESS,
        payload
    }
}