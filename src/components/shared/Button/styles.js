import {StyleSheet} from 'react-native';

const createStyles = colors =>
  StyleSheet.create({
    overlay: {
      borderRadius: 8,
    },
    button: {
      fontSize: 20,
      backgroundColor: colors.secondary,
      padding: 12,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      color: colors.contrast1,
      fontSize: 16,
      fontWeight: '600',
    },
    loader: {
      width: 19,
      height: 19,
    },
  });

export default createStyles;
