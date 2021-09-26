import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SelfEmpowermentExercise} from '../models/SelfEmpowermentExercise';

export interface SettingsState {
  isSurveyFinished: boolean;
  surveyData: Array<{
    mentalStateId: number;
    score: number;
  }>;
  isFirstUsafe: boolean;
  dateOfTheFirstUsage: string | undefined;
  lastUsedExercise: SelfEmpowermentExercise | undefined;
}

const initialState: SettingsState = {
  isSurveyFinished: false,
  surveyData: [],
  dateOfTheFirstUsage: undefined,
  isFirstUsafe: true,
  lastUsedExercise: undefined,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleIsSurveyFinished: (state, action: PayloadAction<boolean>) => {
      state.isSurveyFinished = action.payload;
    },
    toggleIsFirstUsage: (state, action: PayloadAction<boolean>) => {
      state.isFirstUsafe = action.payload;
    },
    setFirstUsageDate: (state, action: PayloadAction<string>) => {
      state.dateOfTheFirstUsage = action.payload;
    },
    setLastUsageExercise: (
      state,
      action: PayloadAction<SelfEmpowermentExercise>,
    ) => {
      state.lastUsedExercise = action.payload;
    },
    addSurveyData: (
      state,
      {payload}: PayloadAction<{mentalStateId: number; score: number}>,
    ) => {
      state.surveyData = state.surveyData.map(item => {
        if (item.mentalStateId === payload.mentalStateId) {
          item.score = payload.score;
        }
        return item;
      });
    },
    addInitialSurveyData: (
      state,
      {payload}: PayloadAction<Array<{mentalStateId: number; score: number}>>,
    ) => {
      state.surveyData = payload;
    },
  },
});

export const {
  toggleIsSurveyFinished,
  addSurveyData,
  addInitialSurveyData,
  toggleIsFirstUsage,
  setFirstUsageDate,
  setLastUsageExercise,
} = settingsSlice.actions;

export default settingsSlice.reducer;
