import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localQuestionnaires from '../../assets/data/questionnaire.json';
import {AppDispatch} from '../store/store';
import {Questionnaire} from '../models/Questionnaire';

export interface QuestionnaireState {
  isLoggedIn: boolean;
  questionnaires: Questionnaire;
  isLoading: boolean;
}

const initialState: QuestionnaireState = {
  isLoggedIn: false,
  questionnaires: localQuestionnaires,
  isLoading: false,
};

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    changeLogInState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getQuestionnaireStart: state => {
      state.isLoading = true;
    },
    getQuestionnaireSuccess: (state, action: PayloadAction<Questionnaire>) => {
      state.questionnaires = action.payload;
    },
  },
});

export const {
  changeLogInState,
  getQuestionnaireStart,
  getQuestionnaireSuccess,
} = questionnaireSlice.actions;

export const getQuestionnaire = () => async (dispatch: AppDispatch) => {
  dispatch(getQuestionnaireStart());
  try {
    const questionnaires = localQuestionnaires;
    dispatch(getQuestionnaireSuccess(questionnaires));
  } catch (error) {
    console.log(error);
  }
};

export default questionnaireSlice.reducer;
