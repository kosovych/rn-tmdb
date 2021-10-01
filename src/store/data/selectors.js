import {get} from 'lodash';
import {createSelector} from 'reselect';

export const moviesDataSelector = state => {
  return get(state, ['data', 'movies']);
};

export const userListsDataSelector = state => get(state, ['data', 'userLists']);

export const genresDataSelector = state => get(state, ['data', 'genres']);

export const personsDataSelector = state => get(state, ['data', 'persons']);

const metaSelector = state => state.data.meta;

export const loadingSelector = createSelector(
  metaSelector,
  (_, endpoint) => endpoint,
  (meta, endpoint) => meta[endpoint] && meta[endpoint].loading,
);
