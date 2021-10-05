import {createReducer} from '@reduxjs/toolkit';
import {merge, get} from 'lodash';

import {setMoviesIds, setSearch} from './actions';

const reducer = createReducer({}, builder => {
  builder
    .addCase(setMoviesIds, (state, action) => {
      return {
        ...state,
        meta: {
          currentPage: action.payload.currentPage,
          totalResults: action.payload.totalResults,
          search: get(state, ['meta', 'search']),
        },
        entries: action.payload.entries,
      };
    })
    .addCase(setSearch, (state, action) => {
      return merge({}, state, {meta: {search: action.payload.searchQuery}});
    });
});

export default reducer;
