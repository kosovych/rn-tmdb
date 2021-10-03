import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import Styles from './styles';

const Loader = () => {
  return (
    <View style={Styles.wrapper}>
      <ActivityIndicator size="large" color="#145DA0" />
    </View>
  );
};

export default Loader;
