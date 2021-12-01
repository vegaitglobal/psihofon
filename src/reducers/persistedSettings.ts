import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PersistedSettingsState {
  reminderNotificationSetupDone: boolean;
}

const initialState: PersistedSettingsState = {
  reminderNotificationSetupDone: false,
};

export const persistedSettingsSlice = createSlice({
  name: 'persistedSettings',
  initialState,
  reducers: {
    setReminderNotificationSetup: (
      state,
      {payload}: PayloadAction<boolean>,
    ) => {
      state.reminderNotificationSetupDone = payload;
    },
  },
});

export const {setReminderNotificationSetup} = persistedSettingsSlice.actions;

export default persistedSettingsSlice.reducer;
