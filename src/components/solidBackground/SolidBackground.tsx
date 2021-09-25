import React from 'react';
import {Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import LogoLight from '../../../assets/icons/LogoLight.svg';
import Logo from '../../../assets/icons/Logo.svg';
import Menu from '../../../assets/icons/Menu.svg';
import MenuDark from '../../../assets/icons/MenuDark.svg';
import {Colors} from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  onPressMenu: () => void;
  isDark?: boolean;
  backgroundColor?: string;
}

export const SolidBackground: React.FC<Props> = ({
  children,
  onPressMenu,
  isDark,
  backgroundColor: backgroundColorProp,
}) => {
  let backgroundColor;
  if (backgroundColorProp) {
    backgroundColor = backgroundColorProp;
  } else {
    backgroundColorProp = isDark ? Colors.DEFAULT : Colors.WHITE;
  }
  return (
    <SafeAreaView style={[style.container, {backgroundColor}]}>
      <View style={style.header}>
        {isDark ? <LogoLight /> : <Logo />}
        <Pressable onPress={onPressMenu}>
          {isDark ? <Menu /> : <MenuDark />}
        </Pressable>
      </View>
      {children}
    </SafeAreaView>
  );
};
