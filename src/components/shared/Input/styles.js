import {StyleSheet} from 'react-native';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      marginBottom: 16,
    },
    error: {
      color: colors.error,
      marginTop: 2,
    },
    label: {
      fontSize: 16,
      marginBottom: 4,
    },
    input: {
      borderWidth: 2,
      borderRadius: 8,
      borderColor: colors.tertiary,
      padding: 8,
      fontSize: 20,
    },
    errorInput: {
      borderColor: colors.error,
    },
  });

export const getErrorInput = styles =>
  StyleSheet.compose(styles.input, styles.errorInput);

export default createStyles;
