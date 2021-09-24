import React, {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../styles/colors';
import style from './style';

interface Props {
  upperContent: ReactNode;
  lowerContent?: ReactNode;
}

export const ComplexBackground: React.FC<Props> = ({
  upperContent,
  lowerContent,
}) => {
  return (
    <SafeAreaView style={style.root}>
      <StatusBar animated={false} backgroundColor={Colors.DARK_GREEN} />
      <View style={style.upperContentContainer}>
        <View style={style.upperContent}>{upperContent}</View>
      </View>
      <View style={style.lowerContentContainer}>
        <View style={style.lowerContent}>{lowerContent}</View>
      </View>
    </SafeAreaView>
  );
};
