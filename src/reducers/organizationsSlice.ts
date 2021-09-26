import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Organization} from '../models/Organization';
import localOrganizations from '../../assets/data/organizations.json';
import {AppDispatch} from '../store/store';

export interface OrganizationsState {
  isLoggedIn: boolean;
  organizations: Array<Organization>;
  isLoading: boolean;
}

const initialState: OrganizationsState = {
  isLoggedIn: false,
  organizations: localOrganizations,
  isLoading: false,
};

export const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    changeLogInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getOrganizationsStart: state => {
      state.isLoading = true;
    },
    getOrganizationsSuccess: (
      state,
      action: PayloadAction<Array<Organization>>,
    ) => {
      state.organizations = action.payload;
    },
  },
});

export const {
  changeLogInState,
  getOrganizationsStart,
  getOrganizationsSuccess,
} = organizationsSlice.actions;

export const getOrganizations = () => async (dispatch: AppDispatch) => {
  dispatch(getOrganizationsStart());
  try {
    const organizations = localOrganizations;
    dispatch(getOrganizationsSuccess(organizations));
  } catch (error) {
    console.log(error);
  }
};

export default organizationsSlice.reducer;
