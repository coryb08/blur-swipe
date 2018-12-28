import * as actions from "./actions";
// import * as types from "./constants/ActionTypes";
import fetch from "isomorphic-fetch";
describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: "hello",
      text
    };
    expect(actions.setCurrentUser(text)).toEqual(expectedAction);
  });
});
