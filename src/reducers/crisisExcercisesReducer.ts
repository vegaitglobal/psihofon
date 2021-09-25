import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localCrisisExcercises from '../../assets/data/crisisExcercises.json';
import {AppDispatch} from '../store/store';
import {CrisisExercise} from '../models/CrisisExercise';

export interface CrisisExcerciseState {
  crisisExcercises: Array<CrisisExercise>;
  isLoading: boolean;
}

const initialState: CrisisExcerciseState = {
  crisisExcercises: localCrisisExcercises,
  isLoading: false,
};

export const crisisExcercisesSlice = createSlice({
  name: 'crisisExcercises',
  initialState,
  reducers: {
    getCrisisExcerciseStart: state => {
      state.isLoading = true;
    },
    getCrisisExcerciseSuccess: (
      state,
      action: PayloadAction<Array<CrisisExercise>>,
    ) => {
      state.crisisExcercises = action.payload;
    },
  },
});

export const {getCrisisExcerciseStart, getCrisisExcerciseSuccess} =
  crisisExcercisesSlice.actions;

export const getOrganizations = () => async (dispatch: AppDispatch) => {
  dispatch(getCrisisExcerciseStart());
  try {
    const crisisExcercises = localCrisisExcercises;
    dispatch(getCrisisExcerciseSuccess(crisisExcercises));
  } catch (error) {
    console.log(error);
  }
};

export default crisisExcercisesSlice.reducer;
