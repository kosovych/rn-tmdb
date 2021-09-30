import {createLogic} from 'redux-logic';
import {normalize} from 'normalizr';

import {moviesListSchema, searchMoviesSchema} from '@schemas';
import {GET_MOVIES} from '../types';
import {requestMoviesSuccess} from '../actions';
import {
  dataApiRequest,
  dataApiSuccess,
  dataApiFailure,
} from '@store/data/actions';
import {trendingMovies, searchMovies} from '../endpoint';
import {movieSearchQuerySelector} from '../selectors';

export const getMoviesOperation = createLogic({
  type: GET_MOVIES,
  latest: true,
  async process({getState, action, axios}, dispatch, done) {
    let {params} = action;
    const searchQuery = movieSearchQuerySelector(getState());
    const {url} = searchQuery ? searchMovies : trendingMovies;
    const {endpoint} = trendingMovies;
    const schema = searchQuery ? searchMoviesSchema : moviesListSchema;
    if (searchQuery) {
      params = {...params, query: searchQuery};
    }
    dispatch(dataApiRequest({endpoint}));
    try {
      const httpClient = await axios;
      const dataRequest = await httpClient.get(url, {params});
      const {data} = dataRequest;
      const {result, entities} = normalize(data.results, schema);
      const movies = {
        entries: result,
        totalResults: data.total_results,
        currentPage: data.page,
      };
      dispatch(
        dataApiSuccess({
          endpoint,
          response: entities.movies,
          feature: 'movies',
        }),
      );
      dispatch(requestMoviesSuccess(movies));
    } catch (error) {
      dispatch(dataApiFailure({endpoint}));
    }
    done();
  },
});
