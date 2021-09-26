import React from 'react';
import style from './style';
import {Colors} from '../../styles/colors';
import {StatusBar, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  children: React.ReactNode;
  isDark?: boolean;
  backgroundColor?: string;
}

export const SolidBackground: React.FC<Props> = ({
  children,
  isDark,
  backgroundColor: backgroundColorProp,
  ...props
}) => {
  let backgroundColor;
  if (backgroundColorProp) {
    backgroundColor = backgroundColorProp;
  } else {
    backgroundColor = isDark ? Colors.DARK_GREEN : Colors.WHITE;
  }
  return (
    <View style={[style.container, {backgroundColor}]} {...props}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? Colors.DARK_GREEN : Colors.WHITE}
      />
      {children}
    </View>
  );
};
