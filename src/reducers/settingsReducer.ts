import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SettingsState {
  isLoggedIn: boolean;
}

const initialState: SettingsState = {
  isLoggedIn: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLogInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {changeLogInState} = settingsSlice.actions;

export default settingsSlice.reducer;
