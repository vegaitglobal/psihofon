import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localMentalStates from '../../assets/data/mentalStates.json';
import {AppDispatch} from '../store/store';
import {MentalState} from '../models/MentalState';

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

export default mentalStatesSlice.reducer;
