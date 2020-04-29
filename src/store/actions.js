import { take, put, all } from "redux-saga/effects";

import axios from "axios";
import * as action_type from "./constants.js";

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const loadFromStorage = (key) => {
  return localStorage.getItem(key);
};

export const getSignupToken = () => ({
  type: action_type.GET_SIGNUP_TOKEN,
});

export const setSignupToken = (payload) => ({
  type: action_type.SET_SIGNUP_TOKEN,
  payload,
});

export const setSignupUserData = (payload) => ({
  type: action_type.SET_SIGNUP_USER_DATA,
  payload,
});

export const getUsers = (url) => ({
  type: action_type.GET_USERS_LIST,
  url,
});

export const setUsersList = (payload) => ({
  type: action_type.SET_USERS_LIST,
  payload,
});

export const clearUsersList = () => ({
  type: action_type.CLEAR_USERS_LIST,
});

export const getUsersPositions = () => ({
  type: action_type.GET_USERS_POSITIONS,
});
const setUsersPositions = (payload) => ({
  type: action_type.SET_USERS_POSITIONS,
  payload,
});

const setPageLoadStatus = (payload) => ({
  type: action_type.SET_USERS_PAGE_LOAD_STATUS,
  payload,
});

export const setLoadAnimation = (payload) => ({
  type: action_type.SET_LOADING,
  payload,
});

export const setModalWindowOptions = (payload) => ({
  type: action_type.MODAL_WINDOW_OPTIONS,
  payload,
});

function* getSignupTokenSaga() {
  const urlToken =
    "https://frontend-test-assignment-api.abz.agency/api/v1/token";
  while (true) {
    yield take(action_type.GET_SIGNUP_TOKEN);
    try {
      const response = yield axios.get(urlToken);
      if (response.status === 200) {
        const token = response.data.token;
        yield saveToStorage("token", JSON.stringify(token));
        yield put(setSignupToken(token));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* signupUserSaga() {
  const url = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
  const basicUsers =
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";

  while (true) {
    const { payload } = yield take(action_type.SET_SIGNUP_USER_DATA);
    const token = yield JSON.parse(loadFromStorage("token"));

    const options = {
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = yield axios.post(url, payload, options);
      if (response.status === 201) {
        yield all([
          put(clearUsersList()),
          put(getUsers(basicUsers)),
          put(setPageLoadStatus(true)),
          put(setModalWindowOptions(response)),
        ]);
      }
    } catch (error) {
      if (error.response) {
        yield put(setModalWindowOptions(error.response));
      }
    }
  }
}

function* getUsersListSaga() {
  while (true) {
    const { url } = yield take(action_type.GET_USERS_LIST);
    try {
      const response = yield axios.get(url);
      if (response.status === 200) {
        const userList = response.data.users;
        yield all([put(setUsersList(userList)), put(setLoadAnimation(false))]);
      }
    } catch (error) {
      yield all([put(setPageLoadStatus(false)), put(setLoadAnimation(false))]);
    }
  }
}

function* getUsersPostitionsSaga() {
  const url =
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
  while (true) {
    yield take(action_type.GET_USERS_POSITIONS);
    try {
      const response = yield axios.get(url);
      if (response.status === 200) {
        const positions = response.data.positions;
        yield all([put(setUsersPositions(positions))]);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export function* rootSaga() {
  console.log("saga");
  yield all([
    getSignupTokenSaga(),
    signupUserSaga(),
    getUsersListSaga(),
    getUsersPostitionsSaga(),
  ]);
}
