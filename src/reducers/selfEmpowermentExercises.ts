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
}

const initialState: SelfEmpowermentExcercisesState = {
  isLoggedIn: false,
  selfEmpowermentExcercises: localSelfEmpowermentExcercises,
  isLoading: false,
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
    },
  },
});

export const {
  changeLogInState,
  getSelfEmpowermentExcercisesStart,
  getSelfEmpowermentExcercisesSuccess,
} = selfEmpowermentExcercisesSlice.actions;

export const getSelfEmpowermentExercises = () => async (dispatch: AppDispatch) => {
  dispatch(getSelfEmpowermentExcercisesStart());
  try {
    const selfEmpowermentExcercises = await SelfEmpowermentExcerciseService.fetchSelfEmpowermentExcercises();
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

export const exerciseByWeekNumber = createSelector(
  (state: RootState) => ({
    selfEmpowermentExcercises: state.selfEmpowerment.selfEmpowermentExcercises,
  }),
  ({selfEmpowermentExcercises}) =>
    (weekNumber: number): SelfEmpowermentExercise | undefined => {
      return selfEmpowermentExcercises.find(
        exercise => exercise.weekNumber === weekNumber,
      );
    },
);

// const decideExercise = () => {
//   if (!lastUsedExerciseId) {
//     return selfEmpowermentExcercises[0].id;
//   }

//   const firstDate = new Date(dateOfTheFirstUsage ?? '');
//   firstDate.setDate(firstDate.getDate() + 7);

//   if (firstDate && firstDate >= new Date()) {
//     console.log('lastWeekNR: ' + lastUsedWeekNumber);
//     const exerciseForNextWeek = getExerciseForAWeek(lastUsedWeekNumber + 1);
//     console.log('nextWE: ' + JSON.stringify(exerciseForNextWeek));
//     setLastUsedExerciseWeek(exerciseForNextWeek?.id ?? 0);
//     setLastUsageExercise(exerciseForNextWeek?.id ?? 0);
//     return exerciseForNextWeek?.id ?? 0;
//   }

//   return selfEmpowermentExcercises[0].id;
// };

export default selfEmpowermentExcercisesSlice.reducer;
