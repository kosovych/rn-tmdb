import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import useThemeColors from '@hooks/useThemeColors';

import createStyles from './styles';

const Loader = () => {
  const colors = useThemeColors();
  const styles = createStyles();

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  );
};

export default Loader;
