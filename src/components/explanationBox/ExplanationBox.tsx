import React, {ReactNode} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import style from './style';

interface ExplanationBoxProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({
  children,
  style: styleProp,
}) => {
  return (
    <View style={[style.container, styleProp]}>
      <Text style={style.title}>Pojašnjenja</Text>
      <Text style={style.content}>{children}</Text>
    </View>
  );
};
