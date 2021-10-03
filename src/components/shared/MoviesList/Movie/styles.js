import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    borderColor: '#B1D4E0',
    borderRadius: 8,
    flexGrow: 1,
    backgroundColor: '#f4fcff',
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
    color: '#2E8BC0',
    fontSize: 12,
  },
  voteAverage: {
    color: '#145DA0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#145DA0',
    borderRadius: 8,
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
  },
  title: {
    color: '#0C2D48',
    fontSize: 16,
  },
});

export default styles;
