import {StyleSheet} from 'react-native';

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

export const errorInput = StyleSheet.compose(styles.input, styles.errorInput);

export default styles;
