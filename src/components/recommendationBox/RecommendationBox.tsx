import React from 'react';
import {View, ViewStyle} from 'react-native';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface RecommendationBoxProps {
  icon: React.ReactElement;
  title: string;
  content: string;
  style?: ViewStyle;
}

export const RecommendationBox: React.FC<RecommendationBoxProps> = ({
  icon,
  title,
  content,
  style: styleProp,
}) => {
  return (
    <View style={style.container}>
      {icon}
      <View style={style.textContainer}>
        <CustomText style={style.title}>{title}</CustomText>
        <CustomText style={style.textContent}>{content}</CustomText>
      </View>
    </View>
  );
};
