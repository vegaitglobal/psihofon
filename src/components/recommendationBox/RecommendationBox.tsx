import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface RecommendationBoxProps {
  icon: React.ReactElement;
  title: string;
  content: string;
}

export const RecommendationBox: React.FC<RecommendationBoxProps> = ({
  icon,
  title,
  content,
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
