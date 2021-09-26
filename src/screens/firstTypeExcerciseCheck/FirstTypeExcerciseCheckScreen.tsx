import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {TitleText} from '../../components/titleText/TitleText';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExcerciseCheckScreenProps} from '../../navigation/FirstExcercisesNavigator';
import {AppRoute} from '../../navigation/routes';
import {
  setFirstUsageDate,
  setLastUsedExerciseWeek,
  toggleIsFirstUsage,
} from '../../reducers/settingsReducer';
import {useAppDispatch} from '../../store/store';
import style from './style';

export const FirstTypeExcerciseCheckScreen: React.FC<FirstTypeExcerciseCheckScreenProps> =
  ({navigation}: FirstTypeExcerciseCheckScreenProps) => {
    const dispatch = useAppDispatch();

    useHeader(navigation);

    const navigateToExercises = () => {
      navigation.replace(AppRoute.FIRST_TYPE_EXERCISE_FIRST_WEEK);
    };

    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <TitleText style={style.title}>
            Hej, nisi uradio vežbe{'\n'}predviđene za prošlu nedelju.
          </TitleText>
          <CustomButton
            isDark={false}
            text="Želim da nastavim sa vezbama"
            onPress={() => {
              console.log('Želim da nastavim sa vežbama');
              navigateToExercises();
            }}
          />
          <View style={style.spacer} />
          <CustomButton
            isDark={false}
            text="Želim da krenem od početka"
            onPress={() => {
              console.log('Želim da krenem od početka');
              dispatch(setFirstUsageDate(undefined));
              dispatch(toggleIsFirstUsage(true));
              dispatch(setLastUsedExerciseWeek(1));
              navigateToExercises();
            }}
          />
        </View>
      </SolidBackground>
    );
  };
