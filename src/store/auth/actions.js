import {
  LOGIN,
  LOGIN_LOGOUT,
  STORE_USER,
  GET_USER,
  SET_SESSION_ID,
} from './types';

export const setSessionId = sessionId => ({
  type: SET_SESSION_ID,
  sessionId,
});

export const loginSubmit = (username, password) => ({
  type: LOGIN,
  username,
  password,
});

export const logout = () => ({
  type: LOGIN_LOGOUT,
});

export const getUser = sessionId => ({
  type: GET_USER,
  sessionId,
});

export const storeUser = payload => ({
  type: STORE_USER,
  payload,
});
