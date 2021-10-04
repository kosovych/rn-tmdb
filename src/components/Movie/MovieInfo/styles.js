import {StyleSheet} from 'react-native';

const createStyles = colors =>
  StyleSheet.create({
    wrap: {
      paddingBottom: 40,
    },
    posterWrap: {
      display: 'flex',
      marginBottom: 12,
    },
    poster: {
      width: '100%',
      height: 550,
    },
    title: {
      fontSize: 24,
      marginBottom: 8,
      borderColor: colors.contrast1,
    },
    text: {
      fontSize: 18,
      marginBottom: 8,
      borderColor: colors.contrast1,
    },
  });

export default createStyles;
