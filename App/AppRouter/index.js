/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import {setSessionId} from '@store/auth/actions';
import Loader from '@components/shared/Loader';
import Login from '@components/Login';
import TrendingMovies from '@components/TrendingMovies';
import {navigationRef} from '@lib/services/NavigationService';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const sessionId = useSelector(state => state.auth.sessionId);

  useEffect(() => {
    const getSessionId = async () => {
      const _sessionId = await AsyncStorage.getItem('@session_id');
      setLoading(false);
      dispatch(setSessionId(_sessionId));
    };
    getSessionId();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {sessionId ? (
          <>
            <Stack.Screen name="TrendingMovies" component={TrendingMovies} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Login}
              options={{title: 'Welcome'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
