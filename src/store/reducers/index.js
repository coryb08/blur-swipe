import { combineReducers } from "redux"
import events from "./events_reducer"
import feed from "./feed_reducer"
import user from "./user_reducer"

const rootReducer = combineReducers({ events, feed, user })

export default rootReducer
