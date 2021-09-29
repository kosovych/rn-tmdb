import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
});

const Container = ({children}) => (
  <ScrollView style={styles.container}>{children}</ScrollView>
);

export default Container;
