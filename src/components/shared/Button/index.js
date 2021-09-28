import React from 'react';
import {Text, TouchableHighlight, StyleSheet, Image, View} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 8,
  },
  button: {
    fontSize: 20,
    backgroundColor: '#145DA0',
    padding: 12,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loader: {
    width: 19,
    height: 19,
  },
});

const Button = ({loading, title, onPress, ...props}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={styles.overlay}
      onPress={onPress}
    >
      <View style={styles.button}>
        {loading ? (
          <Image
            style={styles.loader}
            source={require('../../../../public/images/hug.gif')}
          />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
