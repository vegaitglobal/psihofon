import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localSelfEmpowermentExcercises from '../../assets/data/selfEmpowermentExercises.json';
import {AppDispatch} from '../store/store';
import {SelfEmpowermentExercise} from '../models/SelfEmpowermentExercise';

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

export const getOrganizations = () => async (dispatch: AppDispatch) => {
  dispatch(getSelfEmpowermentExcercisesStart());
  try {
    const selfEmpowermentExcercises = localSelfEmpowermentExcercises;
    dispatch(getSelfEmpowermentExcercisesSuccess(selfEmpowermentExcercises));
  } catch (error) {
    console.log(error);
  }
};

export default selfEmpowermentExcercisesSlice.reducer;
