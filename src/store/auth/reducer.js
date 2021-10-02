import {createReducer} from '@reduxjs/toolkit';

import {setSessionId, logout, storeUser} from './actions';

export const initState = {
  loading: false,
  errorMessage: null,
  sessionId: '',
};

const reducer = createReducer(initState, builder => {
  builder
    .addCase(setSessionId, (state, action) => {
      return {...state, sessionId: action.payload.sessionId};
    })
    .addCase(storeUser, (state, action) => {
      return {...state, ...action.payload};
    })
    .addCase(logout, () => {
      return {...initState, sessionId: null};
    });
});

export default reducer;
