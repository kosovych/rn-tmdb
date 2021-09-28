import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  error: {
    color: '#dd1f00',
    marginTop: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#2E8BC0',
    padding: 8,
    fontSize: 20,
  },
  errorInput: {
    borderColor: '#dd1f00',
  },
});

const errorInput = StyleSheet.compose(styles.input, styles.errorInput);

const Input = ({
  label,
  errors,
  name,
  fieldMeta: {error, touched},
  ...inputProps
}) => {
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
