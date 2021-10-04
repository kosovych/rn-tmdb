import {StyleSheet} from 'react-native';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      width: '50%',
      padding: 8,
    },
    inner: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.quaternary,
      borderRadius: 8,
      flexGrow: 1,
      backgroundColor: colors.quinary,
    },
    imgWrapper: {
      display: 'flex',
    },
    img: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      width: '100%',
      height: 250,
    },
    content: {
      padding: 8,
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    releaseDate: {
      color: colors.tertiary,
      fontSize: 12,
    },
    voteAverage: {
      color: colors.secondary,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.secondary,
      borderRadius: 8,
      fontSize: 12,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 4,
    },
    title: {
      color: colors.primary,
      fontSize: 16,
    },
  });

export default createStyles;
