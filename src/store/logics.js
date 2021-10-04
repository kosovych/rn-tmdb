import {
  loginOperation,
  getUserOperation,
  logoutOperation,
} from './auth/operations';

import {getMoviesOperation} from './trendingMovies/operations';

import {getMovieInfoOperation} from './movie/operations';

export default [
  // auth
  loginOperation,
  getUserOperation,
  logoutOperation,
  // trendingMovies
  getMoviesOperation,
  // movie
  getMovieInfoOperation,
];
