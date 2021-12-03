import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {QuizScreen} from '../screens/quiz/QuizScreen';
import {AnalyticsQuizResultsScreen} from '../screens/analyticsQuizResults/AnalyticsQuizResultsScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducer';
import {ScaleExplanationScreen} from '../screens/scaleExplanationScreen/ScaleExplanationScreen';
import {
  ExcerciseOverviewScreen,
  ExerciseOverviewScreenParams,
} from '../screens/exerciseOverview/ExcerciseOverviewScreen';
import {
  ExerciseListScreen,
  ExerciseListScreenParams,
} from '../screens/exerciseListScreen/ExerciseListScreen';
import {
  SecondTypeEcerciseScreen,
  SecondTypeEcerciseScreenParams,
} from '../screens/SecondTypeExercise/SecondTypeExerciseScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type SecondExcercisesNavigatorParams = {
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ANALYTICS_QUIZ_RESULTS]: undefined;
  [AppRoute.SCALE_EXPLANATION]: undefined;
  [AppRoute.EXCERCISE_OVERVIEW]: ExerciseOverviewScreenParams;
  [AppRoute.SECOND_EXCERCISE_SCREEN]: SecondTypeEcerciseScreenParams;
  [AppRoute.EXERCISE_LIST]: ExerciseListScreenParams;
};

export interface SecondExcercisesNavigatorProps<
  Screen extends keyof SecondExcercisesNavigatorParams,
> {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    Screen
  >;
  route: RouteProp<SecondExcercisesNavigatorParams, Screen>;
}

export type QuizScreenProps = SecondExcercisesNavigatorProps<AppRoute.QUIZ>;

export type AnalyticsQuizResultsScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.ANALYTICS_QUIZ_RESULTS>;

export type ExcerciseOverviewScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.EXCERCISE_OVERVIEW>;

export type ScaleExplanationScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.SCALE_EXPLANATION>;

export type ExerciseListScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.EXERCISE_LIST>;

export type SecondTypeEcerciseScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.SECOND_EXCERCISE_SCREEN>;

export const SecondExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  const {isSurveyFinished} = useSelector((state: RootState) => state.settings);
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={
        isSurveyFinished ? AppRoute.QUIZ : AppRoute.SCALE_EXPLANATION
      }
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        title: '',
      }}>
      <Stack.Screen name={AppRoute.QUIZ} component={QuizScreen} />
      <Stack.Screen
        name={AppRoute.ANALYTICS_QUIZ_RESULTS}
        component={AnalyticsQuizResultsScreen}
      />
      <Stack.Screen
        name={AppRoute.SCALE_EXPLANATION}
        component={ScaleExplanationScreen}
      />
      <Stack.Screen
        name={AppRoute.EXCERCISE_OVERVIEW}
        component={ExcerciseOverviewScreen}
      />
      <Stack.Screen
        name={AppRoute.EXERCISE_LIST}
        component={ExerciseListScreen}
      />
      <Stack.Screen
        name={AppRoute.SECOND_EXCERCISE_SCREEN}
        component={SecondTypeEcerciseScreen}
      />
    </Stack.Navigator>
  );
};
