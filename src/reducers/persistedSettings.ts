import {createSlice, createSelector} from '@reduxjs/toolkit';
import {MAX_NOTIFICATION_REPEAT_COUNT} from '../constants/constants';
import {RootState} from './rootReducer';

export interface PersistedSettingsState {
  firstAppOpeningDate: string | undefined;
}

const initialState: PersistedSettingsState = {
  firstAppOpeningDate: undefined,
};

export const persistedSettingsSlice = createSlice({
  name: 'persistedSettings',
  initialState,
  reducers: {
    registerFirstAppOpen: state => {
      if (!state.firstAppOpeningDate) {
        const now = new Date(Date.now());
        state.firstAppOpeningDate = `${now.getFullYear()}.${now.getMonth()}.${now.getDate()}`;
      }
    },
  },
});

export const {registerFirstAppOpen} = persistedSettingsSlice.actions;

export default persistedSettingsSlice.reducer;

export const shouldDisplayReminder = createSelector(
  (state: RootState) => ({
    firstAppOpeningDate: state.persistedSettings.firstAppOpeningDate,
  }),
  ({firstAppOpeningDate}): boolean => {
    if (!firstAppOpeningDate) {
      return true;
    }
    const now = new Date(Date.now());
    const currentYear = now.getFullYear().toString();
    const currentMonth = now.getMonth().toString();
    const currentDay = now.getDate().toString();

    const firstUsageDate = firstAppOpeningDate?.split('.');
    const firstUsageYear = firstUsageDate![0];
    const firstUsageMonth = firstUsageDate![1];
    const firstUsageDay = firstUsageDate![2];

    if (
      currentYear === firstUsageYear &&
      currentMonth === firstUsageMonth &&
      currentDay <= firstUsageDay + MAX_NOTIFICATION_REPEAT_COUNT
    ) {
      return true;
    }

    return false;
  },
);
