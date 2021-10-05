/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import MovieInfo from './MovieInfo';
import Loader from '@components/shared/Loader';
import {setCurrentMovieId, getMovie} from '@store/movie/actions';
import {movieInfoEndpoint} from '@store/movie/endpoint';
import {movieSelector, genresMovieSelector} from '@store/movie/selectors';
import {loadingSelector} from '@store/data/selectors';

const Movie = props => {
  const movieId = props.route.params.id;
  const movie = useSelector(store => movieSelector(store));
  const genres = useSelector(store => genresMovieSelector(store));
  const loading = useSelector(store =>
    loadingSelector(store, movieInfoEndpoint(movieId).endpoint),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentMovieId(movieId));
    dispatch(getMovie());
    return () => dispatch(setCurrentMovieId(null));
  }, []);

  return <View>{loading ? <Loader /> : <MovieInfo {...movie} genres={genres} />}</View>;
};

export default Movie;
