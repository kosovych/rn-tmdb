import {createReducer} from '@reduxjs/toolkit';
import {WHITE} from '@constants';
import {setTheme} from './actions';

export const initState = {
  type: WHITE,
};

const reducer = createReducer(initState, builder => {
  builder.addCase(setTheme, (state, action) => {
    return {...state, type: action.payload.type};
  });
});

export default reducer;
