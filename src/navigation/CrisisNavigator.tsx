import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {CrisisExercisesScreen} from '../screens/crisisExcerciseScreen/CrisisExcerciseScreen';
import {CrisisExerciseScreen} from '../screens/crisisExerciseScreen/CrisisExerciseScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type CrisisNavigatorParams = {
  [AppRoute.CRISIS_EXERCISES]: undefined;
  [AppRoute.CRISIS_EXERCISE_SCREEN]: undefined;
};

export interface CrisisNavigatorNavigatorProps<
  Screen extends keyof CrisisNavigatorParams,
> {
  navigation: NativeStackNavigationProp<CrisisNavigatorParams, Screen>;
  route: RouteProp<CrisisNavigatorParams, Screen>;
}

export type CrisisExercisesScreenProps =
  CrisisNavigatorNavigatorProps<AppRoute.CRISIS_EXERCISES>;

export const CrisisNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.CRISIS_EXERCISES}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        title: '',
      }}>
      <Stack.Screen
        name={AppRoute.CRISIS_EXERCISES}
        component={CrisisExercisesScreen}
      />
      <Stack.Screen
        name={AppRoute.CRISIS_EXERCISE_SCREEN}
        component={CrisisExerciseScreen}
      />
    </Stack.Navigator>
  );
};
