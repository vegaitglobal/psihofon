import React from 'react';
import styles from './style';
import {Pressable, View} from 'react-native';
import {ButtonTheme} from '../../constants/enums';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import {BigButton} from '../../components/buttons/bigButton/BigButton';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperArea}>
        <BigButton
          theme={ButtonTheme.INVERTED}
          text={'Vežbe za samoosnaživanje'}
          onPress={() => console.log('Pressed samoosnizavanje.')}
        />
        <BigButton
          theme={ButtonTheme.INVERTED}
          style={styles.buttonSpacing}
          text={'Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje'}
          onPress={() => console.log('Pressed Anksioznost')}
        />
        <BigButton
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
