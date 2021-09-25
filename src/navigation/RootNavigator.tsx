import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {MenuScreen} from '../screens/menu/MenuScreen';
import {IntroMenuScreen} from '../screens/introMenuScreen/IntroMenuScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type RootNavigatorParams = {
  [AppRoute.INTRO_MENU]: undefined;
  [AppRoute.MENU]: undefined;
};

export interface RootNavigatorProps<Screen extends keyof RootNavigatorParams> {
  navigation: NativeStackNavigationProp<RootNavigatorParams, Screen>;
  route: RouteProp<RootNavigatorParams, Screen>;
}

export type MenuScreenProps = RootNavigatorProps<AppRoute.MENU>;
export type IntroMenuScreenProps = RootNavigatorProps<AppRoute.INTRO_MENU>;

export const RootNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} initialRouteName={AppRoute.INTRO_MENU}>
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={AppRoute.INTRO_MENU}
        component={IntroMenuScreen}
      />
      <Stack.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.MENU}
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};
