import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {navigationRef} from '@lib/services/NavigationService';

import Login from '@components/Login';
import TrendingMovies from '@components/TrendingMovies';
import Movie from '@components/Movie';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  const sessionId = useSelector(state => state.auth.sessionId);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {sessionId ? (
          <>
            <Stack.Screen
              name="TrendingMovies"
              component={TrendingMovies}
              options={{title: 'Trending Movies'}}
            />
            <Stack.Screen
              name="Movie"
              component={Movie}
              options={({route}) => ({title: route.params.title})}
            />
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
