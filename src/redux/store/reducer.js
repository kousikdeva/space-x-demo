import { combineReducers } from "redux"
import launcherReducer from "../reducer/launcherReducer"
import historyReducer from "../reducer/historyReducer"

export default combineReducers({ launcherReducer, historyReducer })