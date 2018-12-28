let defaultState = {}
export default function(state = defaultState, action) {
  switch (action.type) {
    case "set_current_user":
      return action.payload
    default:
      return state
  }
}
