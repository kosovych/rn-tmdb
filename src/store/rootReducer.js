import {combineReducers} from 'redux';

import auth from './auth';
import data from './data';
import trendingMovies from './trendingMovies';
import theme from './theme';
import movie from './movie';

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  theme,
  movie,
});

export default reducers;
