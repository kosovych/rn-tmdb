import {StyleSheet} from 'react-native';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8,
      marginBottom: 8,
      padding: 4,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: colors.tertiary,
    },
    inner: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: 20,
      height: 20,
      marginLeft: 6,
    },
    close: {
      width: 20,
      height: 20,
      marginRight: 6,
    },
    input: {
      flexGrow: 1,
      padding: 4,
      fontSize: 16,
    },
  });

export default createStyles;
