import {configureStore} from '@reduxjs/toolkit';
import {createLogicMiddleware} from 'redux-logic';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from '../httpClient';
import logic from './logics';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  const dependencies = {
    axios,
  };
  const logicMiddleware = createLogicMiddleware(logic, dependencies);

  return configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logicMiddleware),
  });
};

const store = createStore();
const persistor = persistStore(store);

export {store};
export {persistor};
