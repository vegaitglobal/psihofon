import {combineReducers} from '@reduxjs/toolkit';
import settingsSlice from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
