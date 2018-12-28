import { Actions } from "react-native-router-flux"
import config from "../../config.js"
import * as actions from "./index"
import { Alert } from "react-native"
import axios from "axios"
const { SERVER_URL } = config

export const EmailSignUpRunner = inputs => {
  return async (dispatch, getState) => {
    let validation = await frontEndValidation(inputs)

    if (validation) {
      let params = { email: inputs.emailText, password: inputs.passwordText }
      await axios
        .post(`${SERVER_URL}users`, params, { responseType: "json" })
        .catch(err => console.log("error", err))
        .then(res =>
          console.log("res", typeof JSON.parse(res.request._response))
        )

      Actions.ProfileOptions()
    } else {
    }
  }
}

const frontEndValidation = inputs => {
  if (inputs.passwordText !== inputs.passwordConfirmText) {
    Alert.alert(
      "Passwords do not match",
      "",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    )
    return false
  }
  if (
    inputs.passwordText === "" ||
    inputs.passwordConfirmText === "" ||
    inputs.emailText === ""
  ) {
    Alert.alert(
      "Please fill in all fields",
      "",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    )

    return false
  } else {
    return true
  }
}
