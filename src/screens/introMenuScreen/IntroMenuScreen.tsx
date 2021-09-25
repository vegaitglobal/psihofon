import React, {useLayoutEffect} from 'react';
import {Pressable, StatusBar, View} from 'react-native';
import {
  BigButton,
  ButtonTheme,
} from '../../components/buttons/bigButton/BigButton';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import Logo from '../../../assets/icons/Logo.svg';
import styles from './style';
import {AppRoute} from '../../navigation/routes';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
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
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.QUIZ,
              })
            }
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
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.ORGANIZATIONS_NAVIGATOR,
              })
            }>
            <CustomText>Baza podataka organizacija</CustomText>
          </Pressable>
        </View>
      </View>
    </>
  );
};
