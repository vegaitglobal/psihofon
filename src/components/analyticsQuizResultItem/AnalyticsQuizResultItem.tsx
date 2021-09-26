import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

export interface AnalyticsQuizResultItemModel {
  title: string;
  percentage: string;
}

interface AnalyticsQuizResultItemProps {
  analyticsQuizResultItem: AnalyticsQuizResultItemModel;
}

export const AnalyticsQuizResultItem: React.FC<AnalyticsQuizResultItemProps> =
  ({analyticsQuizResultItem}: AnalyticsQuizResultItemProps) => {
    return (
      <View style={style.container}>
        <Text style={[style.text, style.bold]}>
          {analyticsQuizResultItem.title}
        </Text>
        <Text style={style.text}>{analyticsQuizResultItem.percentage} %</Text>
      </View>
    );
  };
