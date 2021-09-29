import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import Button from '../shared/Button';
import {setSessionId as setSessionIdAction} from '../../store/auth/actions';

const TrendingMovies = ({setSessionId}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {console.log(setSessionId)}
      <Text>TrendingMovies</Text>
      <Button onPress={() => setSessionId(null)} title="Logout" />
    </View>
  );
};

export default connect(null, {setSessionId: setSessionIdAction})(
  TrendingMovies,
);
