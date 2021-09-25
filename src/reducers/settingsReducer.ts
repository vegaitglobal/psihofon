import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SettingsState {
  isSurveyFinished: boolean;
}

const initialState: SettingsState = {
  isSurveyFinished: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleIsSurveyFinished: (state, action: PayloadAction<boolean>) => {
      state.isSurveyFinished = action.payload;
    },
  },
});

export const {toggleIsSurveyFinished} = settingsSlice.actions;

export default settingsSlice.reducer;
