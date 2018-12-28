import { Actions } from "react-native-router-flux"
// import config from "master_a_million/config.js"
// import validate from 'validate.js'
// const { SERVER_URL } = config
// import bugsnag from "../api/bugsnag";
// import firebase from "./../api/firebase";

import * as actions from "./index"

export const setCurrentUser = firebaseRes => {
  return { type: "set_current_user", payload: firebaseRes }
}
