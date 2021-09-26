import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SettingsState {
  isSurveyFinished: boolean;
  surveyData: Array<{
    mentalStateId: number;
    score: number;
  }>;
  isFirstUsafe: boolean;
  dateOfTheFirstUsage: string | undefined;
  //lastUsedExerciseId: number | undefined;
  lastUsedWeekNumber: number;
}

const initialState: SettingsState = {
  isSurveyFinished: false,
  surveyData: [],
  dateOfTheFirstUsage: undefined,
  isFirstUsafe: true,
  //lastUsedExerciseId: undefined,
  lastUsedWeekNumber: 1,
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
    setFirstUsageDate: (state, action: PayloadAction<string | undefined>) => {
      state.dateOfTheFirstUsage = action.payload;
    },
    // setLastUsageExercise: (state, action: PayloadAction<number>) => {
    //   state.lastUsedExerciseId = action.payload;
    // },
    setLastUsedExerciseWeek: (state, action: PayloadAction<number>) => {
      state.lastUsedWeekNumber = action.payload;
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
  //setLastUsageExercise,
  setLastUsedExerciseWeek,
} = settingsSlice.actions;

export default settingsSlice.reducer;
