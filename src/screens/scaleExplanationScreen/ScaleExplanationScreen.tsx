import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {CustomText} from '../../components/customText/CustomText';
import {ScaleExplanationItem} from '../../components/scaleExplanationItem/ScaleExplanationItem';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {TitleText} from '../../components/titleText/TitleText';
// import {useHeader} from '../../hooks/useHeader';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import styles from './style';

export const ScaleExplanationScreen: React.FC<IntroMenuScreenProps> = (
  {
    // navigation,
  },
) => {
  // useHeader(navigation);

  const scaleLabelText = [
    'Uopšte nije karakteristično za mene',
    'Nije karakteristično za mene',
    'Ne znam, nemam mišljenje',
    'Delimično me opisuje',
    'U potpunosti me opisuje',
  ];

  return (
    <SolidBackground isDark={true}>
      <View style={styles.container}>
        <TitleText>Skala odgovora</TitleText>
        <CustomText style={styles.descriptionText}>
          U sledećim pitanjima odgovore dajete prema skali koja definiše meru u
          kojoj vas opisuju navedene situacije. Skalu smo definisali na sledeći
          način:
        </CustomText>
        <View style={styles.scaleContainer}>
          {scaleLabelText.map((scaleInstructionItem, index) => (
            <ScaleExplanationItem
              style={styles.scaleSpacing}
              buttonText={(index + 1).toString()}
              labelText={scaleInstructionItem}
            />
          ))}
        </View>
        <CustomButton
          style={styles.buttonSpacing}
          text={'Nastavi'}
          isDark={false}
          onPress={() => console.log('Pressed Nastavi')}
        />
      </View>
    </SolidBackground>
  );
};
