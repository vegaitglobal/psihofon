import React from 'react';
import {AppRoute} from './routes';
import {SecondExcercisesNavigator} from './SecondExcercisesNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

type DrawerNavigatorProps = React.ComponentProps<typeof Drawer.Navigator>;

export type DrawerNavigatorParams = {
  [AppRoute.SECOND_EXCERCISES]: undefined;
  [AppRoute.QUIZ]: undefined;
};

export const DrawerNavigator = (props: Partial<DrawerNavigatorProps>) => {
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
    </Drawer.Navigator>
  );
};
