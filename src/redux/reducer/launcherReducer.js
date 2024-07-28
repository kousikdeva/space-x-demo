import produce from "immer";
import { GET_LAUNCHER_SUCCESS, GET_UPCOMING_LAUNCHERS_SUCCESS } from "../../constants/actionType";

const initState = () => ({
    loading: false,
    upcomingLaunchers: [],
    launcher: {}
})

export default (state = initState(), action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_UPCOMING_LAUNCHERS_SUCCESS:
                draft.upcomingLaunchers = action.payload
                break
            case GET_LAUNCHER_SUCCESS:
                draft.launcher = action.payload
                break
            default:
                return state
        }
    });