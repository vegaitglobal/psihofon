import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {QuizScreen} from '../screens/quiz/QuizScreen';
import {DrawerNavigatorParams} from './DrawerNavigator';
import {AnalyticsQuizResultsScreen} from '../screens/analyticsQuizResults/AnalyticsQuizResultsScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type SecondExcercisesNavigatorParams = {
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ANALYTICS_QUIZ_RESULTS]: undefined;
  [AppRoute.FIRST_TYPE_EXCERCISES]: undefined;
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

export interface FirstTypeExcercieScreenProps {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    AppRoute.FIRST_TYPE_EXCERCISES
  >;
  route: RouteProp<
    SecondExcercisesNavigatorParams,
    AppRoute.ANALYTICS_QUIZ_RESULTS
  >;
}

export const SecondExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.QUIZ}
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
    </Stack.Navigator>
  );
};
