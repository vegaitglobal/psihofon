import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SettingsState {
  isSurveyFinished: boolean;
  surveyData: Array<{
    mentalStateId: number;
    score: number;
  }>;
  isFirstUsage: boolean;
}

const initialState: SettingsState = {
  isSurveyFinished: false,
  surveyData: [],
  isFirstUsage: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleIsSurveyFinished: (state, action: PayloadAction<boolean>) => {
      state.isSurveyFinished = action.payload;
    },
    toggleIsFirstUsage: (state, action: PayloadAction<boolean>) => {
      state.isFirstUsage = action.payload;
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
} = settingsSlice.actions;

export default settingsSlice.reducer;
