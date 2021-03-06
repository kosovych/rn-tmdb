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
        <Text style={styles.title}>π {title}</Text>
        <View style={styles.genresWrap}>
          <Text style={styles.text}>π Genres: {genresText}</Text>
        </View>
        <Text style={styles.text}>
          π¬Status: <Text>{status}</Text>
        </Text>
        <Text style={styles.text}>
          π ReleaseDate: {new Date(releaseDate).toDateString()}
        </Text>
        <Text style={styles.text}>π° Budget: ${budget}</Text>
        <Text style={styles.text}>πΈ Revenue: ${revenue}</Text>
        <Text style={styles.text}>π’ {tagline}</Text>
        <Text style={styles.text}>π {overview}</Text>
      </View>
    </Container>
  );
};

export default MovieInfo;
