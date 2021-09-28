import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
      <Image
        style={styles.loader}
        source={require('../../public/images/hug.gif')}
      />
    </View>
  );
};

export default Loader;
