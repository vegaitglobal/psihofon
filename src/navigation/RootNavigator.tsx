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
import {InstructionsScreen} from '../screens/instructionsScreen/InstructionsScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducer';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type RootNavigatorParams = {
  [AppRoute.INTRO_MENU]: undefined;
  [AppRoute.QUIZ]: undefined;
  [AppRoute.DRAWER]: NavigatorScreenParams<DrawerNavigatorParams>;
  [AppRoute.INSTRUCTIONS]: undefined;
};

export interface RootNavigatorProps<Screen extends keyof RootNavigatorParams> {
  navigation: NativeStackNavigationProp<RootNavigatorParams, Screen>;
  route: RouteProp<RootNavigatorParams, Screen>;
}

export type IntroMenuScreenProps = RootNavigatorProps<AppRoute.INTRO_MENU>;
export type InstructionsScreenProps = RootNavigatorProps<AppRoute.INSTRUCTIONS>;

export const RootNavigator = (props: Partial<StackNavigatorProps>) => {
  const {isFirstUsage} = useSelector((state: RootState) => state.instruction);
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={
        isFirstUsage ? AppRoute.INSTRUCTIONS : AppRoute.INTRO_MENU
      }>
      <Stack.Screen
        options={{
          gestureEnabled: false,
          title: '',
          headerStyle: {
            backgroundColor: Colors.PALE_GREY,
          },
          headerShadowVisible: false,
        }}
        name={AppRoute.INSTRUCTIONS}
        component={InstructionsScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          title: '',
          headerStyle: {
            backgroundColor: Colors.PALE_GREY,
          },
          headerShadowVisible: false,
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
