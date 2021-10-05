import React from 'react';
import {View, Image, Text} from 'react-native';

import Styles from './styles';

const Empty = () => {
  return (
    <View style={Styles.wrapper}>
      <Image style={Styles.img} source={require('@public/images/empty.png')} />
      <Text style={Styles.text}>No Data</Text>
    </View>
  );
};

export default Empty;
