import React from 'react';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {QuizScreen} from '../screens/quiz/QuizScreen';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerNavigatorParams} from './DrawerNavigator';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type SecondExcercisesNavigatorParams = {
  [AppRoute.QUIZ]: undefined;
};

export interface RootNavigatorProps<
  Screen extends keyof SecondExcercisesNavigatorParams,
> {
  navigation: NativeStackNavigationProp<
    SecondExcercisesNavigatorParams,
    Screen
  >;
  route: RouteProp<SecondExcercisesNavigatorParams, Screen>;
}

// export type QuizScreenProps = RootNavigatorProps<AppRoute.QUIZ>;

export interface QuizScreenProps {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<DrawerNavigatorParams, AppRoute.QUIZ>,
    NativeStackNavigationProp<SecondExcercisesNavigatorParams, AppRoute.QUIZ>
  >;
  route:
    | RouteProp<DrawerNavigatorParams, AppRoute.QUIZ>
    | RouteProp<SecondExcercisesNavigatorParams, AppRoute.QUIZ>;
}

export const SecondExcercisesNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator {...props} initialRouteName={AppRoute.QUIZ}>
      <Stack.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.QUIZ}
        component={QuizScreen}
      />
    </Stack.Navigator>
  );
};
