import { SET_CURRENT_USER } from "../../types.js";
let defaultState = {};
export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
