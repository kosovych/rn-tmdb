import React from 'react';
import Movie from './Movie';

import {FlatList, SafeAreaView} from 'react-native';
import Empty from '../Empty';

const MoviesList = ({movies}) => {
  const renderItem = ({item}) => <Movie {...item} />;
  const numColumns = 2;
  return !movies.length ? (
    <Empty />
  ) : (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

export default MoviesList;
