import {createAction} from '@reduxjs/toolkit';
import {DATA_API_REQUEST, DATA_API_SUCCESS, DATA_API_FAILURE} from './types';

export const dataApiRequest = createAction(DATA_API_REQUEST, ({endpoint}) => ({
  payload: {endpoint},
}));

export const dataApiSuccess = createAction(
  DATA_API_SUCCESS,
  ({endpoint, response, feature}) => ({
    payload: {endpoint, response, feature},
  }),
);

export const dataApiFailure = createAction(DATA_API_FAILURE, ({endpoint}) => ({
  payload: {endpoint},
}));
