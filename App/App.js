import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from './AppRouter';
import configureStore from '../src/store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
