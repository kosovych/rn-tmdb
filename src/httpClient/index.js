import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL, API_KEY} from '../constants';
import logoutInterceptor from './logoutInterceptor';
import setTokenInterceptor from './setTokenInterceptor';

const create = async () => {
  const session_id = await AsyncStorage.getItem('@session_id');
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      api_key: API_KEY,
      session_id,
    },
  });
};

const instance = create().then(inst => {
  inst.interceptors.request.use(setTokenInterceptor, null, {
    // synchronous: true,
  });
  inst.interceptors.response.use(null, logoutInterceptor, {
    // synchronous: true,
  });
  return inst;
});

export default instance;
