import React from 'react';
import {Text, TouchableHighlight, ActivityIndicator, View} from 'react-native';
import Styles from './styles';

const Button = ({loading, title, onPress}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={Styles.overlay}
      onPress={onPress}
    >
      <View style={Styles.button}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={Styles.text}>{title}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
