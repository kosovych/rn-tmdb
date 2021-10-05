import {createAction} from '@reduxjs/toolkit';
import {
  LOGIN,
  LOGIN_LOGOUT,
  STORE_USER,
  GET_USER,
  SET_SESSION_ID,
} from './types';

export const setSessionId = createAction(SET_SESSION_ID, sessionId => ({
  payload: {sessionId},
}));

export const loginSubmit = createAction(LOGIN, (username, password) => ({
  payload: {
    username,
    password,
  },
}));

export const logout = createAction(LOGIN_LOGOUT);

export const getUser = createAction(GET_USER, sessionId => ({
  payload: {
    sessionId,
  },
}));

export const storeUser = createAction(STORE_USER, payload => ({payload}));
