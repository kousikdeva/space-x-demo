import produce from "immer";
import { SET_NAME } from "../constants/actionType";

const initState = () => ({
    name: 'kousik'
})

export default (state = initState(), action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_NAME:
                draft.name = action.payload
                break
            default:
                return state
        }
    });