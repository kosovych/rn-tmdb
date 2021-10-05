import {createAction} from '@reduxjs/toolkit';
import {GET_MOVIES, REQUEST_MOVIES_SUCCESS, SET_SEARCH} from './types';

export const getMovies = createAction(GET_MOVIES, params => ({
  payload: {
    params,
  },
}));

export const setMoviesIds = createAction(REQUEST_MOVIES_SUCCESS, payload => ({
  payload,
}));

export const setSearch = createAction(SET_SEARCH, searchQuery => ({
  payload: {
    searchQuery,
  },
}));
