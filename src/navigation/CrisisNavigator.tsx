import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {CrisisExercisesListScreen} from '../screens/crisisExcerciseListScreen/CrisisExcerciseListScreen';
import {
  CrisisExerciseScreen,
  CrisisExerciseScreenParams,
} from '../screens/crisisExerciseScreen/CrisisExerciseScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type CrisisNavigatorParams = {
  [AppRoute.CRISIS_EXERCISES_LIST]: undefined;
  [AppRoute.CRISIS_EXERCISE_SCREEN]: CrisisExerciseScreenParams;
};

export interface CrisisNavigatorNavigatorProps<
  Screen extends keyof CrisisNavigatorParams,
> {
  navigation: NativeStackNavigationProp<CrisisNavigatorParams, Screen>;
  route: RouteProp<CrisisNavigatorParams, Screen>;
}

export type CrisisExercisesScreenProps =
  CrisisNavigatorNavigatorProps<AppRoute.CRISIS_EXERCISES_LIST>;

export type CrisisExerciseScreenProps =
  CrisisNavigatorNavigatorProps<AppRoute.CRISIS_EXERCISE_SCREEN>;

export const CrisisNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.CRISIS_EXERCISES_LIST}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        title: '',
      }}>
      <Stack.Screen
        name={AppRoute.CRISIS_EXERCISES_LIST}
        component={CrisisExercisesListScreen}
      />
      <Stack.Screen
        name={AppRoute.CRISIS_EXERCISE_SCREEN}
        component={CrisisExerciseScreen}
      />
    </Stack.Navigator>
  );
};
