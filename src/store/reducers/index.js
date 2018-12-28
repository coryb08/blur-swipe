import { combineReducers } from "redux"
import events from "./events_reducer"
import feed from "./feed_reducer"
import signUp from "./signup_reducer"

const rootReducer = combineReducers({ events, feed, signUp })

export default rootReducer
