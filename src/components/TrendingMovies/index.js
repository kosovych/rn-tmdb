/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import MoviesList from '@shared/MoviesList';
import {moviesSelector} from '@store/trendingMovies/selectors';
import {
  getMovies as getMoviesAction,
  setSearch as setSearchAction,
} from '@store/trendingMovies/actions';
import {trendingMovies} from '@store/trendingMovies/endpoint';
import {loadingSelector} from '@store/data/selectors';
import Search from './Search';
import Loader from '@components/shared/Loader';

const TrendingMovies = ({getMovies, setSearch, movies, isLoading}) => {
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View>
      <Search setSearch={setSearch} getMovies={getMovies} />
      {isLoading && <Loader />}
      {!isLoading && <MoviesList movies={movies} />}
    </View>
  );
};

const mapStateToProps = state => ({
  movies: moviesSelector(state),
  isLoading: loadingSelector(state, trendingMovies.endpoint),
});

const mapDispatchToProps = {
  getMovies: getMoviesAction,
  setSearch: setSearchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
