import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExcerciseCheckScreenProps} from '../../navigation/FirstExcercisesNavigator';
import style from './style';

export const FirstTypeExcerciseCheckScreen: React.FC<FirstTypeExcerciseCheckScreenProps> =
  ({navigation}: FirstTypeExcerciseCheckScreenProps) => {
    useHeader(navigation);

    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <CustomText style={style.title}>
            Hej, nisi uradio vežbe{'\n'}predviđene za prošlu nedelju.
          </CustomText>
          <CustomButton
            isDark={false}
            text="Želim da nastavim sa vezbama"
            onPress={() => console.log('Želim da nastavim sa vežbama')}
          />
          <View style={style.spacer} />
          <CustomButton
            isDark={false}
            text="Želim da krenem od početka"
            onPress={() => console.log('Želim da krenem od početka')}
          />
        </View>
      </SolidBackground>
    );
  };
