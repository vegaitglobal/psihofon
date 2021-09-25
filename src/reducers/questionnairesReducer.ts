import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import localQuestionnaires from '../../assets/data/questionnaire.json';
import {AppDispatch} from '../store/store';
import {Answer, Question, Questionnaire} from '../models/Questionnaire';
import {RootState} from './rootReducer';
import {addInitialSurveyData} from './settingsReducer';

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

export const getQuestionnaire =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(getQuestionnaireStart());
    try {
      const questionnaires = localQuestionnaires;
      dispatch(getQuestionnaireSuccess(questionnaires));
      if (!getState().settings.isSurveyFinished) {
        const surveyData = questionnaires.questions.map(item => {
          return {mentalStateId: item.mentalState.id, score: 0};
        });
        const uniqueAddresses = Array.from(
          new Set(surveyData.map(a => a.mentalStateId)),
        ).map(id => {
          return surveyData.find(a => a.mentalStateId === id);
        });
        dispatch(addInitialSurveyData(uniqueAddresses));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const questionnarieAnswers = createSelector(
  (state: RootState) => ({
    answers: state.questionnaire.questionnaires.answers,
  }),
  ({answers}): Array<Answer> => {
    return answers;
  },
);

export const questionnaireById = createSelector(
  (state: RootState) => ({
    questions: state.questionnaire.questionnaires.questions,
  }),
  ({questions}) =>
    (id: number): Array<Question> => {
      const result = questions.filter(item => item.mentalState.id === id)!;
      return result;
    },
);

export const anxietyQuestionnarie = createSelector(
  (state: RootState) => ({
    questions: state.questionnaire.questionnaires.questions,
  }),
  ({questions}): Array<Answer> => {
    return questions.filter(item => item.mentalState.name === 'Anksioznost');
  },
);

export const stressQuestionnarie = createSelector(
  (state: RootState) => ({
    questions: state.questionnaire.questionnaires.questions,
  }),
  ({questions}): Array<Answer> => {
    return questions.filter(item => item.mentalState.name === 'Stres');
  },
);

export const summertimeSadnnessQuestionnarie = createSelector(
  (state: RootState) => ({
    questions: state.questionnaire.questionnaires.questions,
  }),
  ({questions}): Array<Answer> => {
    return questions.filter(item => item.mentalState.name === 'Tuga');
  },
);

export const lowSelfesteemQuestionnarie = createSelector(
  (state: RootState) => ({
    questions: state.questionnaire.questionnaires.questions,
  }),
  ({questions}): Array<Answer> => {
    return questions.filter(
      item => item.mentalState.name === 'Nisko samopoštovanje',
    );
  },
);

export default questionnaireSlice.reducer;
