import {combineReducers} from 'redux';

import auth from './auth';
import data from './data';
import trendingMovies from './trendingMovies';
import theme from './theme';

const reducers = combineReducers({
  auth,
  data,
  trendingMovies,
  theme,
});

export default reducers;
