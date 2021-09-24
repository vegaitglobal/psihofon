import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {MenuScreen} from '../screens/menu/MenuScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type RootNavigatorParams = {
  [AppRoute.MENU]: undefined;
};

export interface RootNavigatorProps<Screen extends keyof RootNavigatorParams> {
  navigation: NativeStackNavigationProp<RootNavigatorParams, Screen>;
  route: RouteProp<RootNavigatorParams, Screen>;
}

export type MenuScreenProps = RootNavigatorProps<AppRoute.MENU>;

export const RootNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} initialRouteName={AppRoute.MENU}>
      <Stack.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.MENU}
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};
