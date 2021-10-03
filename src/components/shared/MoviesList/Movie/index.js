import React from 'react';
import {Text, View, Image} from 'react-native';

import Styles from './styles';

const Movie = ({title, voteAverage, posterPath, releaseDate}) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.inner}>
        <View style={Styles.imgWrapper}>
          <Image
            style={Styles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${posterPath}`,
            }}
          />
        </View>
        <View style={Styles.content}>
          <View style={Styles.info}>
            <Text style={Styles.releaseDate}>{releaseDate}</Text>
            <Text style={Styles.voteAverage}>{voteAverage} / 10</Text>
          </View>
          <Text style={Styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Movie;
