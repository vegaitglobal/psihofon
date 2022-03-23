import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {ReferencesListScreen} from '../screens/referencesList/ReferencesListScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type ReferencesListNavigatorParams = {
  [AppRoute.REFERENCES_LIST]: undefined;
};

export interface ReferencesListNavigatorProps<
  Screen extends keyof ReferencesListNavigatorParams,
> {
  navigation: NativeStackNavigationProp<ReferencesListNavigatorParams, Screen>;
  route: RouteProp<ReferencesListNavigatorParams, Screen>;
}

export interface QuizScreenProps {
  navigation: NativeStackNavigationProp<
    ReferencesListNavigatorParams,
    AppRoute.REFERENCES_LIST
  >;
  route: RouteProp<ReferencesListNavigatorParams, AppRoute.REFERENCES_LIST>;
}

export const ReferencesListNavigator = (
  props: Partial<StackNavigatorProps>,
) => {
  return (
    <Stack.Navigator
      {...props}
      initialRouteName={AppRoute.REFERENCES_LIST}
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        title: '',
      }}>
      <Stack.Screen
        options={{gestureEnabled: false}}
        name={AppRoute.REFERENCES_LIST}
        component={ReferencesListScreen}
      />
    </Stack.Navigator>
  );
};
