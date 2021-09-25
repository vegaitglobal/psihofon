import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {QuizScreen} from '../screens/quiz/QuizScreen';
import {DrawerNavigatorParams} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type SecondExcercisesNavigatorParams = {
  [AppRoute.QUIZ]: undefined;
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
        options={{gestureEnabled: false}}
        name={AppRoute.QUIZ}
        component={QuizScreen}
      />
    </Stack.Navigator>
  );
};
