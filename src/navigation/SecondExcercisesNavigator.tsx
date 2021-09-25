import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {QuizScreen} from '../screens/quiz/QuizScreen';
import {AnalyticsQuizResultsScreen} from '../screens/analyticsQuizResults/AnalyticsQuizResultsScreen';
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

export type ExerciseListScreenProps =
  SecondExcercisesNavigatorProps<AppRoute.EXERCISE_LIST>;

export const SecondExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.EXCERCISE_OVERVIEW}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.QUIZ}
        component={QuizScreen}
      />
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.ANALYTICS_QUIZ_RESULTS}
        component={AnalyticsQuizResultsScreen}
      />
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
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
