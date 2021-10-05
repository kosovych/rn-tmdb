import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    wrapper: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
      width: 50,
      height: 50,
    },
  });

export default createStyles;
