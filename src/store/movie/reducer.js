import {createReducer} from '@reduxjs/toolkit';

import {setCurrentMovieId} from './actions';

const initialStore = {
  currentMovieId: null,
};

const reducer = createReducer(initialStore, builder =>
  builder.addCase(setCurrentMovieId, (state, action) => {
    return {...state, currentMovieId: action.payload.movieId};
  }),
);

export default reducer;
