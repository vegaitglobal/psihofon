import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface RecommendationBoxProps {
  icon: React.FC<SvgProps>;
  title: string;
  content: string;
}

export const RecommendationBox: React.FC<RecommendationBoxProps> = ({
  icon: Icon,
  title,
  content,
}) => {
  return (
    <View style={style.container}>
      <Icon />
      <View style={style.textContainer}>
        <CustomText style={style.title}>{title}</CustomText>
        <CustomText style={style.textContent}>{content}</CustomText>
      </View>
    </View>
  );
};
