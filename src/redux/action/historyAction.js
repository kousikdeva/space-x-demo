import { GET_ALL_HISTORY_SUCCESS, GET_HISTORY_SUCCESS } from "../../constants/actionType"

export const getAllHistory = (payload) => {
    return {
        type: GET_ALL_HISTORY_SUCCESS,
        payload
    }
}
export const getHistory = (payload) => {
    return {
        type: GET_HISTORY_SUCCESS,
        payload
    }
}