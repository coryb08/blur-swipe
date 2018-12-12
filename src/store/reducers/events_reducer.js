const defaultState = { render: false }
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CASE_ONE':
      return {
        ...state
      }
    default:
      return state
  }
}
