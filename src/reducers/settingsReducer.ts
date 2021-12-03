import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SurveyChoices {
  mentalStateId: number;
  score: number;
}
export interface SettingsState {
  isSurveyFinished: boolean;
  surveyData: SurveyChoices[];
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
      const dataIndex = state.surveyData.findIndex(
        item => item.mentalStateId === payload.mentalStateId,
      );
      if (dataIndex > -1) {
        state.surveyData[dataIndex] = payload; //! Score will appear summed.
      } else {
        state.surveyData.push(payload);
      }
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
