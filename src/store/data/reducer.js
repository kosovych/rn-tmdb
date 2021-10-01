import {mergeDeepRight, omit} from 'ramda';
import * as types from './types';

const initialState = {
  meta: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_API_REQUEST:
      return mergeDeepRight(state, {
        meta: {[action.endpoint]: {loading: true}},
      });
    case types.DATA_API_SUCCESS:
      return mergeDeepRight(
        state,
        mergeDeepRight(
          {[action.feature]: action.response},
          {
            meta: {[action.endpoint]: {loading: false}},
          },
        ),
      );
    case types.DATA_API_FAILURE:
      return mergeDeepRight(state, {
        meta: {[action.endpoint]: {loading: false}},
      });
    case types.DATA_DELETE:
      return {...state, [action.kind]: omit(action.ids, state[action.kind])};
    default:
      return state;
  }
};

export default dataReducer;
