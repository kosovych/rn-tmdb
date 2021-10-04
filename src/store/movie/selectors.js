import {get, map} from 'lodash';
import {createSelector} from 'reselect';
import {moviesDataSelector, genresDataSelector} from '@store/data/selectors';

const movieSliceSelector = state => get(state, 'movie');

export const currentMovieIdSelector = createSelector(
  movieSliceSelector,
  movie => movie?.currentMovieId,
);

export const movieSelector = state =>
  get(moviesDataSelector(state), currentMovieIdSelector(state));

export const genresMovieSelector = createSelector(
  movieSelector,
  genresDataSelector,
  (movie, genresData) => map(get(movie, 'genres'), id => genresData[id]),
);
