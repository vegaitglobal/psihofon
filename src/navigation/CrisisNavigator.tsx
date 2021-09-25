import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {CrisisExercisesScreen} from '../screens/crisisExcerciseScreen/CrisisExcerciseScreen';
import {
  ExerciseListScreen,
  ExerciseListScreenParams,
} from '../screens/exerciseListScreen/ExerciseListScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type CrisisNavigatorParams = {
  [AppRoute.CRISIS_EXERCISES]: undefined;
  [AppRoute.EXERCISE_LIST]: ExerciseListScreenParams;
};

export interface CrisisNavigatorNavigatorProps<
  Screen extends keyof CrisisNavigatorParams,
> {
  navigation: NativeStackNavigationProp<CrisisNavigatorParams, Screen>;
  route: RouteProp<CrisisNavigatorParams, Screen>;
}

export type CrisisExercisesScreenProps =
  CrisisNavigatorNavigatorProps<AppRoute.CRISIS_EXERCISES>;

export type ExerciseListScreenProps =
  CrisisNavigatorNavigatorProps<AppRoute.EXERCISE_LIST>;

export const CrisisNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.EXERCISE_LIST}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.CRISIS_EXERCISES}
        component={CrisisExercisesScreen}
      />
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.EXERCISE_LIST}
        component={ExerciseListScreen}
      />
    </Stack.Navigator>
  );
};
