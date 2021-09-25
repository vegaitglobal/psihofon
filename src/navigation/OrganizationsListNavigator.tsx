import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {OrganizationsListScreen} from '../screens/organizationsList/OrganizationsListScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type OrganizationsListNavigatorParams = {
  [AppRoute.ORGANIZATIONS_LIST]: undefined;
};

export interface OrganizationsListNavigatorProps<
  Screen extends keyof OrganizationsListNavigatorParams,
> {
  navigation: NativeStackNavigationProp<
    OrganizationsListNavigatorParams,
    Screen
  >;
  route: RouteProp<OrganizationsListNavigatorParams, Screen>;
}

export interface QuizScreenProps {
  navigation: NativeStackNavigationProp<
    OrganizationsListNavigatorParams,
    AppRoute.ORGANIZATIONS_LIST
  >;
  route: RouteProp<
    OrganizationsListNavigatorParams,
    AppRoute.ORGANIZATIONS_LIST
  >;
}

export const OrganizationsListNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.ORGANIZATIONS_LIST}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false}}
        name={AppRoute.ORGANIZATIONS_LIST}
        component={OrganizationsListScreen}
      />
    </Stack.Navigator>
  );
};
