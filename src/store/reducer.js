import { combineReducers } from "redux";
import * as action_type from "./constants.js";

const initialState = {
  userList: [],
};
function usersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return { ...state };
  }
}

export const reducer = combineReducers({
  users: usersReducer,
});
