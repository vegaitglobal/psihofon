import React from 'react';
import {View} from 'react-native';
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

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    const {dateOfTheFirstUsage, lastUsedExercise} = useSelector(
      (state: RootState) => state.settings,
    );

    const exerciseSelector = useSelector(excerciseById);

    const exerciseId = lastUsedExercise !== undefined ? lastUsedExercise.id : 1;

    const exercise = exerciseSelector(exerciseId);

    useHeader(navigation, false);

    const GeneralInfoWithWeekIndicator = () => {
      return (
        <View style={{}}>
          <CustomText style={{fontSize: 14, color: Colors.GREEN_LIGHT}}>
            {exercise.weekNumber} nedelja
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
      // <ComplexBackground
      //   upperContent={<GeneralInfoWithWeekIndicator />}
      //   lowerContent={
      //     <View>
      //       <ExerciseDescription />
      //       <ExplanationBox
      //         title={'Pojašnjenja'}
      //         text={
      //           'Dozvolite sebi da istažite određeni događaj o kome pišete do kraja i to kako je uticao na Vas. Ovo mogu biti neka iskustva iz detinjstva, odnos sa roditeljima, ljudima koje ste voleli ili volite, Vaša karijera...'
      //         }
      //       />
      //       <RecommendationBox
      //         icon={<TimerIcon />}
      //         title={'asdadfad'}
      //         content={'fdssdf'}
      //       />
      //       <BackToBeginningButton
      //         onPress={() => console.log('Here we should scroll to top')}
      //       />
      //     </View>
      //   }
      // />

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
