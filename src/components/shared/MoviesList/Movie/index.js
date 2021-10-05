import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import useThemeColors from '@hooks/useThemeColors';
import {useLinkProps} from '@react-navigation/native';

import createStyles from './styles';

const Movie = ({
  title,
  voteAverage,
  posterPath,
  releaseDate,
  mediaType,
  id,
}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const {onPress, ...props} = useLinkProps({
    to: {screen: 'Movie', params: {mediaType, id, title}},
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper} {...props}>
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
    </TouchableOpacity>
  );
};

export default Movie;
