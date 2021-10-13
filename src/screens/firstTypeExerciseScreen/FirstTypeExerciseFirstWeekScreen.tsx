import React, {useEffect} from 'react';
import {AppState, AppStateStatus, BackHandler, View} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {RecommendationBox} from '../../components/recommendationBox/RecommendationBox';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExerciseFirstWeekProps} from '../../navigation/FirstExcercisesNavigator';
import TimerIcon from '../../../assets/icons/Timer.svg';
import {ExplanationBox} from '../../components/explanationBox/ExplanationBox';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import {useSelector} from 'react-redux';
import {
  exerciseByCurrentWeekNumberSelector,
  trySwitchingToNextExercise,
} from '../../reducers/selfEmpowermentExercises';
import {useAppDispatch} from '../../store/store';
import {useFocusEffect} from '@react-navigation/native';
import style from './style';

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    const exercise = useSelector(exerciseByCurrentWeekNumberSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
      const subscription = AppState.addEventListener(
        'change',
        handleAppStateChange,
      );

      return () => {
        subscription.remove();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAppStateChange = (newState: AppStateStatus) => {
      if (newState !== 'active') {
        return;
      }

      dispatch(trySwitchingToNextExercise());
    };

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          navigation.goBack();
          navigation.goBack();
          return true;
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [navigation]),
    );

    const GeneralInfoWithWeekIndicator = () => {
      return (
        <View>
          <CustomText style={style.weekNumber}>
            {exercise?.weekNumber}. nedelja
          </CustomText>
          <CustomText style={style.exerciseTitle}>{exercise?.title}</CustomText>
          <CustomText style={style.preparationInformation}>
            {exercise?.preparation}
          </CustomText>
        </View>
      );
    };

    const ExerciseDescription = () => {
      return (
        <View style={style.exerciseDescriptionContainer}>
          <CustomText style={style.exerciseDescriptionTitle}>
            Opis zadatka
          </CustomText>
          <CustomText style={style.exerciseDescription}>
            {exercise?.description}
          </CustomText>
        </View>
      );
    };

    useHeader(navigation, false);

    return (
      <GeneralExerciseScreen
        upperContent={<GeneralInfoWithWeekIndicator />}
        lowerContent={
          <View style={style.lowerSectionContainer}>
            <View>
              <ExerciseDescription />
              <ExplanationBox
                style={style.explanationBox}
                title={'Pojašnjenja'}
                text={exercise?.explanation ?? ''}
              />
            </View>
            <RecommendationBox
              icon={<TimerIcon />}
              title={'Učestalost rada'}
              content={exercise?.durationDescription ?? ''}
            />
          </View>
        }
      />
    );
  };
