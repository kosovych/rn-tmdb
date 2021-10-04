import React from 'react';
import {View, Text, TextInput} from 'react-native';

import useThemeColors from '@hooks/useThemeColors';

import createStyles, {getErrorInput} from './styles';

const Input = ({
  label,
  errors,
  name,
  fieldMeta: {error, touched},
  ...inputProps
}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const errorInput = getErrorInput(styles);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={error && touched ? errorInput : styles.input}
        {...inputProps}
      />
      {Boolean(error && touched) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
