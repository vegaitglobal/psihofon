import React from 'react';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {DrawerNavigator, DrawerNavigatorParams} from './DrawerNavigator';
import {IntroMenuScreen} from '../screens/introMenuScreen/IntroMenuScreen';
import {Colors} from '../styles/colors';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type RootNavigatorParams = {
  [AppRoute.INTRO_MENU]: undefined;
  [AppRoute.QUIZ]: undefined;
  [AppRoute.DRAWER]: NavigatorScreenParams<DrawerNavigatorParams>;
};

export interface RootNavigatorProps<Screen extends keyof RootNavigatorParams> {
  navigation: NativeStackNavigationProp<RootNavigatorParams, Screen>;
  route: RouteProp<RootNavigatorParams, Screen>;
}

export type IntroMenuScreenProps = RootNavigatorProps<AppRoute.INTRO_MENU>;

export const RootNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} initialRouteName={AppRoute.INTRO_MENU}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          gestureEnabled: false,
          title: '',
          headerStyle: {
            backgroundColor: Colors.LIGHT_BACKGROUND,
          },
        }}
        name={AppRoute.INTRO_MENU}
        component={IntroMenuScreen}
      />
      <Stack.Screen
        options={{headerShown: false, header: () => <View />}}
        name={AppRoute.DRAWER}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};
