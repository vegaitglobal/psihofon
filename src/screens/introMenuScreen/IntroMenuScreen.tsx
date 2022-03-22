import React, {useEffect, useLayoutEffect} from 'react';
import styles from './style';
import {Pressable, View, StatusBar} from 'react-native';
import {ButtonTheme} from '../../constants/enums';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import {BigButton} from '../../components/buttons/bigButton/BigButton';
import Logo from '../../../assets/icons/Logo.svg';
import {AppRoute} from '../../navigation/routes';
import {Colors} from '../../styles/colors';
import {useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {toggleIsFirstUsage} from '../../reducers/settingsReducer';
import {getOrganizations} from '../../reducers/organizationsSlice';
import {getMentalStates} from '../../reducers/mentalStatesReducer';
import {getCrisisExercises} from '../../reducers/crisisExcercisesReducer';
import {getQuestionnaire} from '../../reducers/questionnairesReducer';
import {
  getSelfEmpowermentExercises,
  isExerciseDue,
  setFirstUsageDateAsPresent,
  setUserWorkedOnCurrentAssignment,
  trySwitchingToNextExercise,
} from '../../reducers/selfEmpowermentExercises';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {isFirstUsage} = useSelector((state: RootState) => state.settings);
  const {dateOfTheFirstUsage, userWorkedOnCurrentAssignment} = useSelector(
    (state: RootState) => state.selfEmpowerment,
  );

  useEffect(() => {
    dispatch(getOrganizations());
    dispatch(getSelfEmpowermentExercises());
    dispatch(getMentalStates());
    dispatch(getCrisisExercises());
    dispatch(getQuestionnaire());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
      headerStyle: {
        backgroundColor: Colors.PALE_GREY,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const navigateToSelfEmpowermentExercises = () => {
    navigation.navigate(AppRoute.DRAWER, {
      screen: AppRoute.SELF_EMPOWERMENT_NAVIGATOR,
    });
  };

  const onSelfEmpowermentPressed = () => {
    if (isFirstUsage) {
      dispatch(setFirstUsageDateAsPresent());
      dispatch(toggleIsFirstUsage(false));
      navigateToSelfEmpowermentExercises();
      return;
    }

    const isExerciseDueValue = isExerciseDue(dateOfTheFirstUsage ?? '');

    if (!userWorkedOnCurrentAssignment && isExerciseDueValue) {
      navigation.navigate(AppRoute.DRAWER, {
        screen: AppRoute.SELF_EMPOWERMENT_NAVIGATOR,
        params: {
          screen: AppRoute.FIRST_TYPE_EXCERCISE_CHECK,
        },
      });
      return;
    }

    // This is part of the flow without the warning screen
    // and without the first usage flow
    if (isExerciseDueValue) {
      dispatch(trySwitchingToNextExercise());
    } else {
      dispatch(setUserWorkedOnCurrentAssignment(true));
    }

    navigateToSelfEmpowermentExercises();
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.PALE_GREY} />
      <View style={styles.container}>
        <View style={styles.upperArea}>
          <BigButton
            theme={ButtonTheme.INVERTED}
            text={'Vežbe za samoosnaživanje'}
            onPress={onSelfEmpowermentPressed}
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
          <Pressable
            style={styles.bottomButton}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.REFERENCES_NAVIGATOR,
              })
            }>
            <CustomText>Reference</CustomText>
          </Pressable>
        </View>
      </View>
    </>
  );
};
