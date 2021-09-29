import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 50,
    height: 50,
  },
});

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color="#FFFFFF" />
    </View>
  );
};

export default Loader;
