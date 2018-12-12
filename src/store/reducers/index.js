import { combineReducers } from "redux"
import events from "./events_reducer"
import feedReducer from "./feed_reducer"

const rootReducer = combineReducers({ events, feedReducer })

export default rootReducer
