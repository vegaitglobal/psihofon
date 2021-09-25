import React, {useLayoutEffect} from 'react';
import {Pressable} from 'react-native';
import Logo from '../../assets/icons/Logo.svg';
import MenuDark from '../../assets/icons/MenuDark.svg';

// TODO Add navigation generic type
export const useLightHeader = (navigation: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
      headerRight: () => (
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <MenuDark />
        </Pressable>
      ),
    });
  }, [navigation]);
};
