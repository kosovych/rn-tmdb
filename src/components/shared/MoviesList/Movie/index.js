import React from 'react';
import {Text, View, Image} from 'react-native';
import useThemeColors from '@hooks/useThemeColors';

import createStyles from './styles';

const Movie = ({title, voteAverage, posterPath, releaseDate}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${posterPath}`,
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text style={styles.releaseDate}>{releaseDate}</Text>
            <Text style={styles.voteAverage}>{voteAverage} / 10</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Movie;
