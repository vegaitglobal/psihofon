import React, {useEffect} from 'react';
import {AppState, AppStateStatus, BackHandler, View} from 'react-native';
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
import {
  exerciseByCurrentWeekNumberSelector,
  setFirstUsageDateAsPresent,
  // exerciseCountSelector,
  trySwitchingToNextExercise,
} from '../../reducers/selfEmpowermentExercises';
import {useAppDispatch} from '../../store/store';
import {useFocusEffect} from '@react-navigation/native';
// import {AppRoute} from '../../navigation/routes';

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    const {dateOfTheFirstUsage} = useSelector(
      (state: RootState) => state.selfEmpowerment,
    );

    // const {lastUsedWeekNumber} = useSelector(
    //   (state: RootState) => state.selfEmpowerment,
    // );

    const exercise = useSelector(exerciseByCurrentWeekNumberSelector);
    // const exerciseCount = useSelector(exerciseCountSelector);

    const dispatch = useAppDispatch();

    const checkForNextExercise = () => {
      console.log('checking');
      if (currentDate > exerciseEndDate) {
        // console.log('its time for a change: ' + lastUsedWeekNumber);
        // const nextWeekNumber = lastUsedWeekNumber + 1;
        //console.log('NEXT WEEK NUMBER: ' + nextWeekNumber);
        // if (nextWeekNumber >= exerciseCount) {
        //   console.log('All exercises finished');
        //   navigation.replace(AppRoute.INTRO_MENU); //TODONF
        // } else {
        //   console.log('SELECTED WEEK NR: ' + nextWeekNumber);
        // }

        dispatch(trySwitchingToNextExercise());
        console.log('Dispatching new');
        dispatch(setFirstUsageDateAsPresent());
      }
    };

    // useEffect(() => {
    //   checkForNextExercise();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // // useEffect(() => {
    //   console.log('EFFECRTING');
    //   if (!exercise) {
    //     console.log('IT"S NULL');
    //     dispatch(setLastUsedExerciseWeek(1));
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // // }, [exercise]);

    useHeader(navigation, false);

    // useEffect(() => {
    //   dispatch(setLastUsedExerciseWeek(exercise?.weekNumber ?? 0)); //TODONF
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useFocusEffect(() => {
    //   console.log('WHATT');
    //   checkForNextExercise();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // });

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
        console.log('ignoring');
        return;
      }
      //checkForNextExercise();
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
          <CustomText style={{fontSize: 14, color: Colors.GREEN_LIGHT}}>
            {exercise?.weekNumber}. nedelja
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
