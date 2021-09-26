import React, {ReactNode} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import style from './style';

interface ExplanationBoxProps {
  title: string;
  text: string;
  style?: ViewStyle;
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({
  title,
  text,
  style: styleProp,
}) => {
  return (
    <View style={[style.container, styleProp]}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.content}>{text}</Text>
    </View>
  );
};
