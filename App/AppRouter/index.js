/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

import {setSessionId as setSessionIdAction} from '../../src/store/auth/actions';
import Loader from '../../src/components/Loader';
import Login from '../../src/components/Login';
import TrendingMovies from '../../src/components/TrendingMovies';
import {navigationRef} from '../../src/lib/services/NavigationService';

const Stack = createNativeStackNavigator();

const AppRouter = ({setSessionId, sessionId}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSessionId = async () => {
      const _sessionId = await AsyncStorage.getItem('@session_id');
      setLoading(false);
      setSessionId(_sessionId);
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

const mapStateToProps = state => ({
  sessionId: state.auth.sessionId,
});

const mapDispatchToProps = {
  setSessionId: setSessionIdAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
