import React from 'react';
import {Pressable, View} from 'react-native';
import {
  ButtonTheme,
  CustomButton,
} from '../../components/customButton/CustomButton';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import styles from './style';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperArea}>
        <CustomButton
          theme={ButtonTheme.INVERTED}
          text={'Vežbe za samoosnaživanje'}
          onPress={() => console.log('Pressed samoosnizavanje.')}
        />
        <CustomButton
          theme={ButtonTheme.INVERTED}
          style={styles.buttonSpacing}
          text={'Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje'}
          onPress={() => console.log('Pressed Anksioznost')}
        />
        <CustomButton
          style={styles.buttonSpacing}
          text={'U krizi sam'}
          onPress={() => console.log('Pressed U krizi sam.')}
        />
      </View>
      <View style={styles.bottomArea}>
        <Pressable
          style={styles.bottomButton}
          onPress={() => console.log('Baza podataka organizacija')}>
          <CustomText>Baza podataka organizacija</CustomText>
        </Pressable>
      </View>
    </View>
  );
};
