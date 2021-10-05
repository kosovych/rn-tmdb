import {createLogic} from 'redux-logic';
import {normalize} from 'normalizr';
import camelcaseKeys from 'camelcase-keys';

import {movieInfoEndpoint} from '../endpoint';
import {genresListsSchema} from '@schemas/genresListsSchema';
import {
  dataApiRequest,
  dataApiSuccess,
  dataApiFailure,
} from '@store/data/actions';
import {movieSelector, currentMovieIdSelector} from '@store/movie/selectors';
import {GET_MOVIE_INFO} from '../types';

export const getMovieInfoOperation = createLogic({
  type: GET_MOVIE_INFO,
  latest: true,
  async process({axios, getState}, dispatch, done) {
    const movieId = currentMovieIdSelector(getState());
    const {endpoint, url} = movieInfoEndpoint(movieId);
    try {
      dispatch(dataApiRequest({endpoint}));
      const httpClient = await axios;
      const response = await httpClient.get(url);
      const {genres} = response.data;
      const {result: genresIDs, entities: genresData} = normalize(
        genres,
        genresListsSchema,
      );
      const movie = movieSelector(getState());
      dispatch(
        dataApiSuccess({
          endpoint,
          response: genresData.genreLists,
          feature: 'genres',
        }),
      );
      dispatch(
        dataApiSuccess({
          feature: 'movies',
          endpoint,
          response: {
            [movieId]: {
              ...movie,
              ...camelcaseKeys(response.data),
              genres: genresIDs,
            },
          },
        }),
      );
    } catch (error) {
      dispatch(dataApiFailure({endpoint}));
      console.log(error);
    }
    done();
  },
});
