import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {RouteProp} from '@react-navigation/native';
import {FirstTypeExcerciseCheckScreen} from '../screens/firstTypeExcerciseCheck/FirstTypeExcerciseCheckScreen';
import {FirstTypeExerciseFirstWeekScreen} from '../screens/firstTypeExerciseScreen/FirstTypeExerciseFirstWeekScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type FirstExcercisesNavigatorParams = {
  [AppRoute.FIRST_TYPE_EXCERCISE_CHECK]: undefined;
  [AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK]: undefined;
};

export interface FirstExcercisesNavigatorProps<
  Screen extends keyof FirstExcercisesNavigatorParams,
> {
  navigation: NativeStackNavigationProp<FirstExcercisesNavigatorParams, Screen>;
  route: RouteProp<FirstExcercisesNavigatorParams, Screen>;
}

export interface FirstTypeExcerciseCheckScreenProps {
  navigation: NativeStackNavigationProp<
    FirstExcercisesNavigatorParams,
    AppRoute.FIRST_TYPE_EXCERCISE_CHECK
  >;
  route: RouteProp<
    FirstExcercisesNavigatorParams,
    AppRoute.FIRST_TYPE_EXCERCISE_CHECK
  >;
}

export interface FirstTypeExerciseFirstWeekProps {
  navigation: NativeStackNavigationProp<
    FirstExcercisesNavigatorParams,
    AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK
  >;
  route: RouteProp<
    FirstExcercisesNavigatorParams,
    AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK
  >;
}

export const FirstExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        title: '',
      }}>
      <Stack.Screen
        name={AppRoute.FIRST_TYPE_EXCERCISE_CHECK}
        component={FirstTypeExcerciseCheckScreen}
      />
      <Stack.Screen
        name={AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK}
        component={FirstTypeExerciseFirstWeekScreen}
      />
    </Stack.Navigator>
  );
};
