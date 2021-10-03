import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Styles, {errorInput} from './styles';

const Input = ({
  label,
  errors,
  name,
  fieldMeta: {error, touched},
  ...inputProps
}) => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.label}>{label}</Text>
      <TextInput
        style={error && touched ? errorInput : Styles.input}
        {...inputProps}
      />
      {Boolean(error && touched) && <Text style={Styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
