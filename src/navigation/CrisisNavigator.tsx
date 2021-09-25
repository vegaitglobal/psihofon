import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {CrisisExercisesScreen} from '../screens/crisisExcerciseScreen/CrisisExcerciseScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type CrisisNavigatorParams = {
  [AppRoute.CRISIS_EXERCISES]: undefined;
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
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.CRISIS_EXERCISES}
        component={CrisisExercisesScreen}
      />
    </Stack.Navigator>
  );
};
