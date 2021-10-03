import React from 'react';
import {ScrollView} from 'react-native';

import Styles from './styles';

const Container = ({children}) => (
  <ScrollView style={Styles.container}>{children}</ScrollView>
);

export default Container;
