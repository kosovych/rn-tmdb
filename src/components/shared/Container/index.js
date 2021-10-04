import React from 'react';
import {ScrollView} from 'react-native';

import createStyles from './styles';

const Container = ({children}) => {
  const styles = createStyles();
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Container;
