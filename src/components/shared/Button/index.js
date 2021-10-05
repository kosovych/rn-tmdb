import React from 'react';
import {Text, TouchableHighlight, ActivityIndicator, View} from 'react-native';

import useThemeColors from '@hooks/useThemeColors';
import createStyles from './styles';

const Button = ({loading, title, onPress}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      style={styles.overlay}
      onPress={onPress}
    >
      <View style={styles.button}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.contrast1} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
