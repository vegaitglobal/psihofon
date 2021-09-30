import React, {useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import {ComplexBackground} from '../../components/complexBackground/ComplexBackground';
import {CustomText} from '../../components/customText/CustomText';
import {RecommendationBox} from '../../components/recommendationBox/RecommendationBox';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExerciseFirstWeekProps} from '../../navigation/FirstExcercisesNavigator';
import {Colors} from '../../styles/colors';
import TimerIcon from '../../../assets/icons/Timer.svg';
import {BackToBeginningButton} from '../../components/backToBeggingingButtion/BackToBegginingButton';
import {ExplanationBox} from '../../components/explanationBox/ExplanationBox';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {excerciseById} from '../../reducers/selfEmpowermentExercises';
import {useAppDispatch} from '../../store/store';
import {setLastUsageExercise} from '../../reducers/settingsReducer';
import {useFocusEffect} from '@react-navigation/native';

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    const {dateOfTheFirstUsage, lastUsedExerciseId} = useSelector(
      (state: RootState) => state.settings,
    );

    const {selfEmpowermentExcercises} = useSelector(
      (state: RootState) => state.selfEmpowerment,
    );

    const dispatch = useAppDispatch();

    const exerciseSelector = useSelector(excerciseById);

    const exerciseId =
      lastUsedExerciseId !== undefined
        ? lastUsedExerciseId
        : selfEmpowermentExcercises[0].id;

    const exercise = exerciseSelector(exerciseId);

    useHeader(navigation, false);

    useEffect(() => {
      dispatch(setLastUsageExercise(exercise.id));
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
        <View style={{}}>
          <CustomText style={{fontSize: 14, color: Colors.GREEN_LIGHT}}>
            {exercise.weekNumber}. nedelja
          </CustomText>
          <CustomText
            style={{
              paddingTop: 8,
              fontSize: 24,
              color: Colors.WHITE,
              fontWeight: '600',
            }}>
            {exercise.title}
          </CustomText>
          <CustomText style={{fontSize: 14, color: Colors.WHITE}}>
            {exercise.preparation}
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
            {exercise.description}
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
                text={exercise.explanation}
              />
            </View>
            <RecommendationBox
              icon={<TimerIcon />}
              title={'Učestalost rada'}
              content={exercise.durationDescription}
            />
          </View>
        }
      />
    );
  };
