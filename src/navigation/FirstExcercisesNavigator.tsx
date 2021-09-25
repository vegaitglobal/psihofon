import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {RouteProp} from '@react-navigation/native';
import {FirstTypeExcerciseCheckScreen} from '../screens/firstTypeExcerciseCheck/FirstTypeExcerciseCheckScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type FirstExcercisesNavigatorParams = {
  [AppRoute.FIRST_TYPE_EXCERCISE_CHECK]: undefined;
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

export const FirstExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.FIRST_TYPE_EXCERCISE_CHECK}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false, title: ''}}
        name={AppRoute.FIRST_TYPE_EXCERCISE_CHECK}
        component={FirstTypeExcerciseCheckScreen}
      />
    </Stack.Navigator>
  );
};
