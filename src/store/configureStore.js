import {configureStore} from '@reduxjs/toolkit';
import {createLogicMiddleware} from 'redux-logic';

import axios from '../httpClient';
import logic from './logics';
import rootReducer from './rootReducer';

const createStore = () => {
  const dependencies = {
    axios,
  };
  const logicMiddleware = createLogicMiddleware(logic, dependencies);

  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(logicMiddleware),
  });
};

export default createStore;
