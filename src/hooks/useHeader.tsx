import React, {useLayoutEffect} from 'react';
import {Pressable} from 'react-native';
import Logo from '../../assets/icons/Logo.svg';
import MenuDark from '../../assets/icons/MenuDark.svg';
import LogoLight from '../../assets/icons/LogoLight.svg';
import Menu from '../../assets/icons/Menu.svg';
import {Colors} from '../styles/colors';

// TODO Add navigation generic type
export const useHeader = (navigation: any, isLight: boolean = false) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (isLight ? <Logo /> : <LogoLight />),
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: isLight ? Colors.PALE_GRAY : Colors.DARK_GREEN,
      },

      headerRight: () => (
        <Pressable onPress={() => navigation.toggleDrawer()}>
          {isLight ? <MenuDark /> : <Menu />}
        </Pressable>
      ),
    });
  }, [navigation, isLight]);
};
