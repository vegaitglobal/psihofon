import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import styles from './style';

export const ScaleExplanationScreen: React.FC<IntroMenuScreenProps> = ({}) => {
  return (
    <SolidBackground
      isDark={true}
      onPressMenu={() => console.log('Menu pressed')}>
      <View style={styles.container}>
        <CustomText>Skala odgovora</CustomText>
      </View>
    </SolidBackground>
  );
};
