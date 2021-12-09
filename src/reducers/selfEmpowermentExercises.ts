import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import localSelfEmpowermentExcercises from '../../assets/data/selfEmpowermentExercises.json';
import {AppDispatch} from '../store/store';
import {SelfEmpowermentExercise} from '../models/SelfEmpowermentExercise';
import {RootState} from './rootReducer';
import SelfEmpowermentExcerciseService from '../services/SelfEmpowermentExcerciseService';

export interface SelfEmpowermentExcercisesState {
  isLoggedIn: boolean;
  selfEmpowermentExcercises: Array<SelfEmpowermentExercise>;
  isLoading: boolean;
  lastUsedWeekNumber: number;
  dateOfTheFirstUsage: string | undefined;
  userWorkedOnCurrentAssignment: boolean;
}

const initialState: SelfEmpowermentExcercisesState = {
  isLoggedIn: false,
  selfEmpowermentExcercises: localSelfEmpowermentExcercises,
  isLoading: false,
  lastUsedWeekNumber: 1,
  dateOfTheFirstUsage: undefined,
  userWorkedOnCurrentAssignment: false,
};

export const selfEmpowermentExcercisesSlice = createSlice({
  name: 'selfEmpowermentExcercises',
  initialState,
  reducers: {
    changeLogInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getSelfEmpowermentExcercisesStart: state => {
      state.isLoading = true;
    },
    getSelfEmpowermentExcercisesSuccess: (
      state,
      action: PayloadAction<Array<SelfEmpowermentExercise>>,
    ) => {
      state.selfEmpowermentExcercises = action.payload;
      state.isLoading = false;
    },

    trySwitchingToNextExercise: state => {
      if (!isExerciseDue(state.dateOfTheFirstUsage ?? '')) {
        return;
      }

      state.userWorkedOnCurrentAssignment = false;

      const currentWeekNumber = state.lastUsedWeekNumber;
      state.lastUsedWeekNumber =
        currentWeekNumber >= state.selfEmpowermentExcercises.length
          ? initialState.lastUsedWeekNumber
          : currentWeekNumber + 1;

      state.dateOfTheFirstUsage = new Date().toLocaleDateString();
    },
    resetExercises: state => {
      state.lastUsedWeekNumber = initialState.lastUsedWeekNumber;
      state.dateOfTheFirstUsage = new Date().toLocaleDateString();
      state.userWorkedOnCurrentAssignment = false;
    },

    setFirstUsageDateAsPresent: state => {
      state.dateOfTheFirstUsage = new Date().toLocaleDateString();
    },
    resetFirstUsageDate: state => {
      state.dateOfTheFirstUsage = initialState.dateOfTheFirstUsage;
    },

    setUserWorkedOnCurrentAssignment: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.userWorkedOnCurrentAssignment = action.payload;
    },
  },
});

export const isExerciseDue = (dateAsString: string) => {
  if (dateAsString === '') {
    return false;
  }

  const firstDate = new Date(dateAsString);
  console.log('First date: ' + firstDate);

  const exerciseEndDate = new Date(firstDate.getTime());
  exerciseEndDate.setDate(firstDate.getDate() + 7);
  console.log('Exercise end date: ' + exerciseEndDate);

  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setUTCMinutes(0);
  currentDate.setSeconds(0);
  // Other two date variables don't contain seconds
  // so we reset them here as well

  console.log('Current date: ' + currentDate);

  return currentDate > exerciseEndDate;
};

export const {
  changeLogInState,
  getSelfEmpowermentExcercisesStart,
  getSelfEmpowermentExcercisesSuccess,
  trySwitchingToNextExercise,
  resetExercises,
  setFirstUsageDateAsPresent,
  resetFirstUsageDate,
  setUserWorkedOnCurrentAssignment,
} = selfEmpowermentExcercisesSlice.actions;

export const getSelfEmpowermentExercises =
  () => async (dispatch: AppDispatch) => {
    dispatch(getSelfEmpowermentExcercisesStart());
    try {
      const selfEmpowermentExcercises =
        await SelfEmpowermentExcerciseService.fetchSelfEmpowermentExcercises();
      dispatch(getSelfEmpowermentExcercisesSuccess(selfEmpowermentExcercises));
    } catch (error) {
      console.log(error);
    }
  };

export const excerciseById = createSelector(
  (state: RootState) => ({
    selfEmpowermentExcercises: state.selfEmpowerment.selfEmpowermentExcercises,
  }),
  ({selfEmpowermentExcercises}) =>
    (id: number): SelfEmpowermentExercise => {
      const result = selfEmpowermentExcercises.find(item => item.id === id)!;
      return result;
    },
);

export const exerciseByCurrentWeekNumberSelector = createSelector(
  (state: RootState) => ({
    selfEmpowermentExcercises: state.selfEmpowerment.selfEmpowermentExcercises,
    lastUsedWeekNumber: state.selfEmpowerment.lastUsedWeekNumber,
  }),
  ({selfEmpowermentExcercises, lastUsedWeekNumber}) => {
    return selfEmpowermentExcercises.find(
      exercise => exercise.weekNumber === lastUsedWeekNumber,
    );
  },
);

export default selfEmpowermentExcercisesSlice.reducer;
