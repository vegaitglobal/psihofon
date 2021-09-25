import React from 'react';
import styles from './style';
import {View} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {useHeader} from '../../hooks/useHeader';
import {CrisisExercisesScreenProps} from '../../navigation/CrisisNavigator';

export const CrisisExercisesScreen: React.FC<CrisisExercisesScreenProps> = ({
  navigation,
}) => {
  useHeader(navigation, false);
  return (
    <SolidBackground isDark={true}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.title}>
            <CustomText style={styles.titleText}>Spisak vežbi</CustomText>
          </View>
          <CustomButton
            style={styles.button}
            text={'Dišite duboko'}
            onPress={() => console.log('Pressed')}
            isDark={false}
          />
          <CustomButton
            style={{...styles.button, ...styles.buttonSpacing}}
            text={'Zastanite. Zapitajte se'}
            onPress={() => console.log('Pressed')}
            isDark={false}
          />
          <CustomButton
            style={{...styles.button, ...styles.buttonSpacing}}
            text={'Prizemlje'}
            onPress={() => console.log('Pressed')}
            isDark={false}
          />
        </View>
        <View style={styles.lowerContainer} />
      </View>
    </SolidBackground>
  );
};
