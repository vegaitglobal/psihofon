import React from 'react';
import {AppRoute} from './routes';
import {SecondExcercisesNavigator} from './SecondExcercisesNavigator';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Close from '../../assets/icons/Close.svg';
import {Colors} from '../styles/colors';
import {Paddings} from '../constants/style';
import Logo from '../../assets/icons/Logo.svg';
import {CustomText} from '../components/customText/CustomText';

const Drawer = createDrawerNavigator();

type DrawerNavigatorProps = React.ComponentProps<typeof Drawer.Navigator>;

export type DrawerNavigatorParams = {
  [AppRoute.SECOND_EXCERCISES]: undefined;
  [AppRoute.QUIZ]: undefined;
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
        <Close />
      </Pressable>
      <View style={style.content}>
        <View style={style.menu}>
          <Pressable>
            <CustomText style={style.menuItem}>
              Vežbe za samoosnaživanje
            </CustomText>
          </Pressable>
          <Pressable>
            <CustomText style={style.menuItem}>
              Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje
            </CustomText>
          </Pressable>
          <Pressable>
            <CustomText style={style.menuItem}>U krizi sam</CustomText>
          </Pressable>
          <Pressable>
            <CustomText style={style.menuItem}>
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

export const DrawerNavigator = (props: Partial<DrawerNavigatorProps>) => {
  return (
    <Drawer.Navigator
      {...props}
      initialRouteName={AppRoute.QUIZ}
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
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  drawerContent: {
    paddingHorizontal: Paddings.XLARGE,
    flex: 1,
  } as ViewStyle,
  drawerContentContainer: {
    alignItems: 'center',
  } as ViewStyle,
  logo: {
    position: 'absolute',
    bottom: '25%',
    alignSelf: 'center',
  } as ViewStyle,
  menuItem: {
    fontWeight: '500',
    fontSize: 15,
  } as TextStyle,
  menu: {
    width: '70%',
    height: '30%',
    justifyContent: 'space-between',
  } as ViewStyle,
  content: {
    flex: 1,
    height: Dimensions.get('screen').height,
    marginTop: '20%',
  } as ViewStyle,
  closeIcon: {
    alignSelf: 'flex-end',
  } as ViewStyle,
});
