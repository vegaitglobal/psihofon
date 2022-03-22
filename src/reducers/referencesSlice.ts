import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localReferences from '../../assets/data/references.json';
import {AppDispatch} from '../store/store';
import {Reference} from '../models/Reference';
import ReferenceService from '../services/ReferenceService';

export interface ReferencesState {
  isLoggedIn: boolean;
  references: Array<Reference>;
  isLoading: boolean;
}

const initialState: ReferencesState = {
  isLoggedIn: false,
  references: localReferences,
  isLoading: false,
};

export const referencesSlice = createSlice({
  name: 'references',
  initialState,
  reducers: {
    changeLogInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getReferencesStart: state => {
      state.isLoading = true;
    },
    getReferencesSuccess: (state, action: PayloadAction<Array<Reference>>) => {
      state.references = action.payload;
      state.isLoading = false;
    },
  },
});

export const {changeLogInState, getReferencesStart, getReferencesSuccess} =
  referencesSlice.actions;

export const getReferences = () => async (dispatch: AppDispatch) => {
  dispatch(getReferencesStart());
  try {
    const references = await ReferenceService.fetchReferences();
    dispatch(getReferencesSuccess(references));
  } catch (error) {
    console.log(error);
  }
};

export default referencesSlice.reducer;
