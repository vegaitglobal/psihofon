import React, {useLayoutEffect} from 'react';
import styles from './style';
import {Pressable, View, StatusBar} from 'react-native';
import {ButtonTheme} from '../../constants/enums';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import {BigButton} from '../../components/buttons/bigButton/BigButton';
import Logo from '../../../assets/icons/Logo.svg';
import {AppRoute} from '../../navigation/routes';
import {Colors} from '../../styles/colors';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
      headerStyle: {
        backgroundColor: Colors.PALE_GREY,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.PALE_GREY} />
      <View style={styles.container}>
        <View style={styles.upperArea}>
          <BigButton
            theme={ButtonTheme.INVERTED}
            text={'Vežbe za samoosnaživanje'}
            onPress={() => {
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.FIRST_TYPE_EXERCISE_NAVIGATOR,
              });
            }}
          />
          <BigButton
            theme={ButtonTheme.INVERTED}
            style={styles.buttonSpacing}
            text={'Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje'}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.SECOND_EXCERCISES,
              })
            }
          />
          <BigButton
            style={styles.buttonSpacing}
            text={'U krizi sam'}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.CRISIS,
              })
            }
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
