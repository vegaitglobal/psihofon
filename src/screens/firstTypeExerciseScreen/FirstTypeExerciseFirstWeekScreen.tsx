import React, {useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {RecommendationBox} from '../../components/recommendationBox/RecommendationBox';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExerciseFirstWeekProps} from '../../navigation/FirstExcercisesNavigator';
import {Colors} from '../../styles/colors';
import TimerIcon from '../../../assets/icons/Timer.svg';
import {ExplanationBox} from '../../components/explanationBox/ExplanationBox';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {exerciseByWeekNumber} from '../../reducers/selfEmpowermentExercises';
import {useAppDispatch} from '../../store/store';
import {
  setFirstUsageDate,
  setLastUsedExerciseWeek,
} from '../../reducers/settingsReducer';
import {useFocusEffect} from '@react-navigation/native';

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    const {dateOfTheFirstUsage, lastUsedWeekNumber} = useSelector(
      (state: RootState) => state.settings,
    );

    const dispatch = useAppDispatch();

    const checkForNextExercise = () => {
      const firstDate = new Date(dateOfTheFirstUsage ?? '');
      firstDate.setDate(firstDate.getDate() + 7);

      if (firstDate && firstDate >= new Date()) {
        console.log('lastWeekNR: ' + lastUsedWeekNumber);
        const sdfgsdf = lastUsedWeekNumber + 1;
        dispatch(setLastUsedExerciseWeek(sdfgsdf));
        dispatch(setFirstUsageDate(new Date().toLocaleDateString()));
        console.log('nextWE: ' + sdfgsdf);
      }
    };

    useEffect(() => {
      checkForNextExercise();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('WEEEEK: ' + lastUsedWeekNumber);
    const exerciseSelector = useSelector(exerciseByWeekNumber);

    const exercise = exerciseSelector(lastUsedWeekNumber);

    useHeader(navigation, false);

    useEffect(() => {
      dispatch(setLastUsedExerciseWeek(exercise?.weekNumber ?? 0));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
          <CustomText style={{fontSize: 14, color: Colors.GREEN_LIGHT}}>
            {exercise?.weekNumber} nedelja
          </CustomText>
          <CustomText
            style={{
              paddingTop: 8,
              fontSize: 24,
              color: Colors.WHITE,
              fontWeight: '600',
            }}>
            {exercise?.title}
          </CustomText>
          <CustomText style={{fontSize: 14, color: Colors.WHITE}}>
            {exercise?.preparation}
          </CustomText>
        </View>
      );
    };

    const ExerciseDescription = () => {
      return (
        <View style={{paddingHorizontal: 30}}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: Colors.BLACKISH_TEXT,
            }}>
            Opis zadatka
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              paddingTop: 13,
              color: Colors.DARK_GRAY,
            }}>
            {exercise?.description}
          </CustomText>
        </View>
      );
    };

    return (
      <GeneralExerciseScreen
        upperContent={<GeneralInfoWithWeekIndicator />}
        lowerContent={
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
              <ExerciseDescription />
              <ExplanationBox
                style={{marginTop: 28}}
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
