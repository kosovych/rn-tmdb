import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  img: {
    width: 64,
    height: 64,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
  },
});

const Empty = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={require('../../../../public/images/empty.png')}
      />
      <Text style={styles.text}>No Data</Text>
    </View>
  );
};

export default Empty;
