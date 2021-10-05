import React from 'react';
import {Text, Image, View} from 'react-native';

import Container from '@components/shared/Container';
import useThemeColors from '@hooks/useThemeColors';
import createStyles from './styles';

const MovieInfo = ({
  title,
  overview,
  posterPath,
  releaseDate,
  revenue,
  status,
  tagline,
  budget,
  genres,
}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const genresText = genres.map(({name}) => name).join(', ');
  return (
    <Container>
      <View style={styles.wrap}>
        <View style={styles.posterWrap}>
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${posterPath}`,
            }}
          />
        </View>
        <Text style={styles.title}>🎞 {title}</Text>
        <View style={styles.genresWrap}>
          <Text style={styles.text}>📚 Genres: {genresText}</Text>
        </View>
        <Text style={styles.text}>
          🎬Status: <Text>{status}</Text>
        </Text>
        <Text style={styles.text}>
          🗓 ReleaseDate: {new Date(releaseDate).toDateString()}
        </Text>
        <Text style={styles.text}>💰 Budget: ${budget}</Text>
        <Text style={styles.text}>💸 Revenue: ${revenue}</Text>
        <Text style={styles.text}>📢 {tagline}</Text>
        <Text style={styles.text}>📝 {overview}</Text>
      </View>
    </Container>
  );
};

export default MovieInfo;
