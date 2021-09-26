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
import {ExcerciseOverviewScreen} from '../screens/exerciseOverview/ExcerciseOverviewScreen';
import {
  ExerciseListScreen,
  ExerciseListScreenParams,
} from '../screens/exerciseListScreen/ExerciseListScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type SecondExcercisesNavigatorParams = {
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ANALYTICS_QUIZ_RESULTS]: undefined;
  [AppRoute.SCALE_EXPLANATION]: undefined;
  [AppRoute.EXCERCISE_OVERVIEW]: undefined;
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

export interface QuizScreenProps {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    AppRoute.QUIZ
  >;
  route: RouteProp<SecondExcercisesNavigatorParams, AppRoute.QUIZ>;
}

export interface AnalyticsQuizResultsScreenProps {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    AppRoute.ANALYTICS_QUIZ_RESULTS
  >;
  route: RouteProp<
    SecondExcercisesNavigatorParams,
    AppRoute.ANALYTICS_QUIZ_RESULTS
  >;
}

export interface ExcerciseOverviewScreenProps {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    AppRoute.EXCERCISE_OVERVIEW
  >;
  route: RouteProp<
    SecondExcercisesNavigatorParams,
    AppRoute.ANALYTICS_QUIZ_RESULTS
  >;
}

export type ScaleExplanationScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.SCALE_EXPLANATION>;

export type ExerciseListScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.EXERCISE_LIST>;

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
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.EXERCISE_LIST}
        component={ExerciseListScreen}
      />
    </Stack.Navigator>
  );
};
