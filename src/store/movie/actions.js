import {createAction} from '@reduxjs/toolkit';
import {
  SET_MOVIE_ID,
  GET_MOVIE_INFO,
  GET_MOVIE_IMAGES,
  GET_MOVIE_CREDITS,
  GET_MOVIE_ACCOUNT_STATES,
  ADD_MOVIE_TO_WATCHLIST,
  ADD_MOVIE_TO_FAVORITES,
} from './types';

export const setCurrentMovieId = createAction(SET_MOVIE_ID, movieId => ({
  payload: {
    movieId,
  },
}));

export const getMovie = createAction(GET_MOVIE_INFO);

export const getMovieImages = createAction(GET_MOVIE_IMAGES);

export const getMovieCredits = createAction(GET_MOVIE_CREDITS);

export const getMovieAccountStates = createAction(GET_MOVIE_ACCOUNT_STATES);

export const toggleMovieWatchlist = createAction(ADD_MOVIE_TO_WATCHLIST);

export const addMovieToFavorites = createAction(ADD_MOVIE_TO_FAVORITES);
