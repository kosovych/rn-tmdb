import {
  STORE_DATA,
  DATA_API_REQUEST,
  DATA_API_SUCCESS,
  DATA_API_FAILURE,
} from './types';

export const dataApiRequest = ({endpoint}) => ({
  type: DATA_API_REQUEST,
  endpoint,
});

export const dataApiSuccess = ({endpoint, response, feature}) => ({
  type: DATA_API_SUCCESS,
  endpoint,
  response,
  feature,
});

export const dataApiFailure = ({endpoint}) => ({
  type: DATA_API_FAILURE,
  endpoint,
});

export const storeData = (endpoint, payload) => ({
  type: STORE_DATA,
  endpoint,
  payload,
});
