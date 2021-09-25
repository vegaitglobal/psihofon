import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {OrganizationsListNavigator} from './OrganizationsListNavigator';
import {AppRoute} from './routes';
import {SecondExcercisesNavigator} from './SecondExcercisesNavigator';

const Drawer = createDrawerNavigator();

type DrawerNavigatorProperties = React.ComponentProps<typeof Drawer.Navigator>;

export type DrawerNavigatorParams = {
  [AppRoute.SECOND_EXCERCISES]: undefined;
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ORGANIZATIONS_NAVIGATOR]: undefined;
};

export interface RootNavigatorProps<
  Screen extends keyof DrawerNavigatorParams,
> {
  navigation: DrawerNavigationProp<DrawerNavigatorParams, Screen>;
  route: RouteProp<DrawerNavigatorParams, Screen>;
}

export type OrganizationsListScreenProps =
  RootNavigatorProps<AppRoute.ORGANIZATIONS_NAVIGATOR>;

export const DrawerNavigator = (props: Partial<DrawerNavigatorProperties>) => {
  return (
    <Drawer.Navigator
      {...props}
      initialRouteName={AppRoute.QUIZ}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: Dimensions.get('screen').width,
          justifyContent: 'center',
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.SECOND_EXCERCISES}
        component={SecondExcercisesNavigator}
      />
      <Drawer.Screen
        options={{gestureEnabled: false}}
        name={AppRoute.ORGANIZATIONS_NAVIGATOR}
        component={OrganizationsListNavigator}
      />
    </Drawer.Navigator>
  );
};
