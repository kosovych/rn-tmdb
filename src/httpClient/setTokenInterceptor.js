import AsyncStorage from '@react-native-async-storage/async-storage';

const setTokenInterceptor = async config => {
  const token = await AsyncStorage.getItem('@session_id');

  if (token) {
    config.params.session_id = `${token}`;
  }

  return config;
};

export default setTokenInterceptor;
