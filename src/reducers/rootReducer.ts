import {combineReducers} from '@reduxjs/toolkit';
import crisisExcercisesSlice from './crisisExcercisesReducer';
import mentalStatesSlice from './mentalStatesReducer';
import organizationsSlice from './organizationsSlice';
import questionnaireSlice from './questionnairesReducer';
import selfEmpowermentExcercisesSlice from './selfEmpowermentExercises';
import settingsSlice from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsSlice,
  organizations: organizationsSlice,
  questionnaire: questionnaireSlice,
  crisisExcercises: crisisExcercisesSlice,
  mentalStates: mentalStatesSlice,
  selfEmpowerment: selfEmpowermentExcercisesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
