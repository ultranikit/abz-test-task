import { take, put, all } from "redux-saga/effects";

import axios from "axios";
import * as action_type from "./constants.js";

export const getUsers = (url) => ({
  type: action_type.GET_USERS_LIST,
  url,
});

export const setUsersList = (payload) => ({
  type: action_type.SET_USERS_LIST,
  payload,
});

const setPageLoadStatus = (payload) => ({
  type: action_type.SET_USERS_PAGE_LOAD_STATUS,
  payload,
});

function* getUsersListSaga() {
  while (true) {
    const { url } = yield take(action_type.GET_USERS_LIST);
    try {
      const response = yield axios.get(url);
      if (response.status === 200) {
        const userList = response.data.users;
        yield put(setUsersList(userList));
      }
    } catch (error) {
      yield put(setPageLoadStatus(false));
    }
  }
}

export function* rootSaga() {
  console.log("saga");
  yield all([getUsersListSaga()]);
}
