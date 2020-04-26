import { combineReducers } from "redux";
import * as action_type from "./constants.js";

const initialState = {
  userList: [],
  usersPageLoadStatus: true,
};
function usersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case action_type.SET_USERS_LIST:
      return {
        ...state,
        userList: state.userList.concat(payload),
      };

    case action_type.SET_USERS_PAGE_LOAD_STATUS:
      return {
        ...state,
        usersPageLoadStatus: payload,
      };

    default:
      return { ...state };
  }
}

export const reducer = combineReducers({
  users: usersReducer,
});
