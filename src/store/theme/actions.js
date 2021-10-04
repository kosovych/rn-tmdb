import {createAction} from '@reduxjs/toolkit';
import {SET_THEME} from './types';

export const setTheme = createAction(SET_THEME, type => ({
  payload: {type},
}));
