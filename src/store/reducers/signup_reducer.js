let defaultState = {
  signUpEmail: "",
  signUpPassword: "",
  signUpPasswordConfirm: ""
}
export default function(state = defaultState, action) {
  switch (action.type) {
    case "sign_up_email":
      return { ...state, signUpEmail: action.payload }
    default:
      return state
  }
}
