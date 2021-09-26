import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {OrganizationsListNavigator} from './OrganizationsListNavigator';
import {AppRoute} from './routes';
import {SecondExcercisesNavigator} from './SecondExcercisesNavigator';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Close from '../../assets/icons/Close.svg';
import {Colors} from '../styles/colors';
import {Paddings} from '../styles/paddings';
import Logo from '../../assets/icons/Logo.svg';
import {CustomText} from '../components/customText/CustomText';
import {CrisisNavigator} from './CrisisNavigator';
import {FirstExcercisesNavigator} from './FirstExcercisesNavigator';
import {verticalScale} from 'react-native-size-matters';
import {Margins} from '../styles/margins';
import {isTinyDevice} from '../constants/constants';

const Drawer = createDrawerNavigator();

type DrawerNavigatorProperties = React.ComponentProps<typeof Drawer.Navigator>;

export type DrawerNavigatorParams = {
  [AppRoute.SECOND_EXCERCISES]: undefined;
  [AppRoute.QUIZ]: undefined;
  [AppRoute.ORGANIZATIONS_NAVIGATOR]: undefined;
  [AppRoute.CRISIS]: undefined;
  [AppRoute.SELF_EMPOWERMENT_NAVIGATOR]: undefined;
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={style.drawerContent}
      contentContainerStyle={style.drawerContentContainer}>
      <Pressable
        style={style.closeIcon}
        onPress={() => props.navigation.closeDrawer()}>
        <Close
          fill={Colors.BLACK}
          color={Colors.BLACK}
          width={20}
          height={20}
        />
      </Pressable>
      <View style={style.content}>
        <View style={style.menu}>
          <Pressable
            style={style.menuItem}
            onPress={() =>
              props.navigation.navigate(AppRoute.SELF_EMPOWERMENT_NAVIGATOR)
            }>
            <CustomText style={style.itemTextContainer}>
              Vežbe za samoosnaživanje
            </CustomText>
          </Pressable>
          <Pressable
            style={style.menuItem}
            onPress={() =>
              props.navigation.navigate(AppRoute.SECOND_EXCERCISES)
            }>
            <CustomText style={style.itemTextContainer}>
              Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje
            </CustomText>
          </Pressable>
          <Pressable
            style={style.menuItem}
            onPress={() => props.navigation.navigate(AppRoute.CRISIS)}>
            <CustomText style={style.itemTextContainer}>U krizi sam</CustomText>
          </Pressable>
          <Pressable
            style={style.menuItem}
            onPress={() =>
              props.navigation.navigate(AppRoute.ORGANIZATIONS_NAVIGATOR)
            }>
            <CustomText style={style.itemTextContainer}>
              Baza podataka organizacija
            </CustomText>
          </Pressable>
        </View>
        <View style={style.logo}>
          <Logo />
        </View>
      </View>
    </DrawerContentScrollView>
  );
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
      initialRouteName={AppRoute.CRISIS}
      drawerContent={drawerProps => <CustomDrawerContent {...drawerProps} />}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: Colors.WHITE,
          width: Dimensions.get('screen').width,
          justifyContent: 'center',
        },
        headerShown: false,
        drawerContentContainerStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Drawer.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.SECOND_EXCERCISES}
        component={SecondExcercisesNavigator}
      />
      <Drawer.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.CRISIS}
        component={CrisisNavigator}
      />
      <Drawer.Screen
        options={{gestureEnabled: false}}
        name={AppRoute.ORGANIZATIONS_NAVIGATOR}
        component={OrganizationsListNavigator}
      />
      <Drawer.Screen
        options={{gestureEnabled: false}}
        name={AppRoute.SELF_EMPOWERMENT_NAVIGATOR}
        component={FirstExcercisesNavigator}
      />
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  drawerContent: {
    paddingHorizontal: Paddings.MEDIUM,
    flex: 1,
  } as ViewStyle,
  drawerContentContainer: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
  logo: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: verticalScale(80),
  } as ViewStyle,
  menuItem: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  } as TextStyle,
  itemTextContainer: {
    width: '90%',
    fontWeight: '500',
    fontSize: 15,
  } as ViewStyle,
  menu: {
    width: '100%',
    justifyContent: 'space-between',
  } as ViewStyle,
  content: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: verticalScale(Margins.MIDLARGE),
  } as ViewStyle,
  closeIcon: {
    top: isTinyDevice ? 10 : 0,
    padding: 10,
    alignSelf: 'flex-end',
  } as ViewStyle,
});
