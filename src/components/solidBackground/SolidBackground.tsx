import React from 'react';
import style from './style';
import {Colors} from '../../styles/colors';
import {StatusBar, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  isDark: boolean;
}

export const SolidBackground: React.FC<Props> = ({children, isDark}) => {
  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDark ? Colors.DARK_GREEN : Colors.WHITE},
      ]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {children}
    </View>
  );
};
