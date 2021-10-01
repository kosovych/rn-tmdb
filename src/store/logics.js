import {
  loginOperation,
  getUserOperation,
  logoutOperation,
} from './auth/operations';

import {getMoviesOperation} from './trendingMovies/operations';

export default [
  loginOperation,
  getUserOperation,
  logoutOperation,
  getMoviesOperation,
];
