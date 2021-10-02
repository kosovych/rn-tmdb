/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => moviesSelector(state));
  const isLoading = useSelector(state =>
    loadingSelector(state, trendingMovies.endpoint),
  );

  const getMovies = () => dispatch(getMoviesAction());
  const setSearch = search => dispatch(setSearchAction(search));

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

export default TrendingMovies;
