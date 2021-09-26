import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import localMentalStates from '../../assets/data/mentalStates.json';
import {AppDispatch} from '../store/store';
import {MentalState, MentalStateExercise} from '../models/MentalState';
import {RootState} from './rootReducer';

export interface MentalStatesState {
  mentalStates: Array<MentalState>;
  isLoading: boolean;
}

const initialState: MentalStatesState = {
  mentalStates: localMentalStates,
  isLoading: false,
};

export const mentalStatesSlice = createSlice({
  name: 'mentalStates',
  initialState,
  reducers: {
    getMentalStatesStart: state => {
      state.isLoading = true;
    },
    getMentalStatesSuccess: (
      state,
      action: PayloadAction<Array<MentalState>>,
    ) => {
      state.mentalStates = action.payload;
    },
  },
});

export const {getMentalStatesStart, getMentalStatesSuccess} =
  mentalStatesSlice.actions;

export const getMentalStates = () => async (dispatch: AppDispatch) => {
  dispatch(getMentalStatesStart());
  try {
    const mentalStates = localMentalStates;
    dispatch(getMentalStatesSuccess(mentalStates));
  } catch (error) {
    console.log(error);
  }
};

export const mentalStateExercisesByIdAndQuery = createSelector(
  (state: RootState) => ({
    mentalStates: state.mentalStates.mentalStates,
  }),
  ({mentalStates}) =>
    (id: number, query: string): Array<MentalStateExercise> => {
      const mentalState = mentalStates.find(item => {
        if (item.id === id) {
          return item;
        }
      })!;
      const result = mentalState.exercises!.filter(exercise => {
        if (query.length === 0 || exercise.title.includes(query)) {
          return exercise;
        }
      })!;
      return result;
    },
);

export const mentalStateExercisesById = createSelector(
  (state: RootState) => ({
    mentalStates: state.mentalStates.mentalStates,
  }),
  ({mentalStates}) =>
    (mentalStateId: number, exerciseId: number): MentalStateExercise => {
      const result = mentalStates
        .find(item => item.id === mentalStateId)!
        .exercises?.find(exercise => exercise.id === exerciseId)!;
      return result;
    },
);

export default mentalStatesSlice.reducer;
