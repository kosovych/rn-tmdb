import AsyncStorage from '@react-native-async-storage/async-storage';

const logoutInterceptor = async error => {
  if (error.response.status === 401) {
    await AsyncStorage.setItem('@session_id', '');
  }
  return Promise.reject(error);
};

export default logoutInterceptor;
