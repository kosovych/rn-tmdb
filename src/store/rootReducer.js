import {combineReducers} from 'redux';

import auth from './auth';
import data from './data';

const reducers = combineReducers({
  auth,
  data,
});

export default reducers;
