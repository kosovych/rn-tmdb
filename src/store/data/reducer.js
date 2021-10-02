import {mergeDeepRight} from 'ramda';
import {createReducer} from '@reduxjs/toolkit';

import {dataApiRequest, dataApiSuccess, dataApiFailure} from './actions';

const initialState = {
  meta: {},
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(dataApiRequest, (state, action) => {
      return mergeDeepRight(state, {
        meta: {[action.payload.endpoint]: {loading: true}},
      });
    })
    .addCase(dataApiSuccess, (state, action) => {
      return mergeDeepRight(
        state,
        mergeDeepRight(
          {[action.payload.feature]: action.payload.response},
          {
            meta: {[action.payload.endpoint]: {loading: false}},
          },
        ),
      );
    })
    .addCase(dataApiFailure, (state, action) => {
      return mergeDeepRight(state, {
        meta: {[action.endpoint]: {loading: false}},
      });
    });
});

export default reducer;
