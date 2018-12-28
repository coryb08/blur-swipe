const defaultState = { render: false }
export default function(state = defaultState, action) {
  switch (action.type) {
    case "CASE_ONE":
      return {
        ...state
      }
    default:
      return state
  }
}
