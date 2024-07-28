import produce from "immer";
import { CLEAR_HISTORY, GET_ALL_HISTORY_SUCCESS, GET_HISTORY_SUCCESS } from "../../constants/actionType";

const initState = () => ({
    loading: false,
    allHistories: [],
    history: {}
})

export default (state = initState(), action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_ALL_HISTORY_SUCCESS:
                draft.allHistories = action.payload
                break
            case GET_HISTORY_SUCCESS:
                draft.history = action.payload
                break
            case CLEAR_HISTORY:
                draft.history = {}
                break
            default:
                return state
        }
    });