import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Animated, Dimensions, FlatList, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {useHeader} from '../../hooks/useHeader';
import {QuizScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {RootState} from '../../reducers/rootReducer';
import {useAppDispatch} from '../../store/store';
import styles from './style';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {Colors} from '../../styles/colors';
import {MentalState} from '../../models/MentalState';
import {Paddings} from '../../styles/paddings';
import {questionnaireById} from '../../reducers/questionnairesReducer';
import {CustomText} from '../../components/customText/CustomText';
import {CircleButton} from '../../components/buttons/circleButton/CircleButton';
import {
  addSurveyData,
  toggleIsSurveyFinished,
} from '../../reducers/settingsReducer';
import {Question} from '../../models/Questionnaire';
import {ButtonTheme} from '../../constants/enums';
import {AppRoute} from '../../navigation/routes';

const QuestionItem = ({
  question,
  onPress,
}: {
  question: Question;
  onPress: (question: Question, score: number) => void;
}) => {
  const [questionScore, setQuestionScore] = useState<undefined | number>(
    undefined,
  );
  const {answers} = useSelector(
    (state: RootState) => state.questionnaire.questionnaires,
  );

  const onPressHandle = (score: number) => {
    onPress(question, score);
    setQuestionScore(score);
  };

  return (
    <View style={styles.question}>
      <CustomText style={{fontSize: 16, fontWeight: '500', marginBottom: 18}}>
        {question.text}
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        {answers.map((answer, index) => (
          <CircleButton
            text={(index + 1).toString()}
            onPress={() => onPressHandle(answer.orderNumber)}
            isPressed={questionScore === answer.orderNumber}
            theme={ButtonTheme.GRAY_BLACK}
            key={answer.id}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <CustomText style={{fontSize: 8, width: 60}}>
          {answers[0].text}
        </CustomText>
        <CustomText style={{fontSize: 8, width: 60, textAlign: 'right'}}>
          {answers[answers.length - 1].text}
        </CustomText>
      </View>
    </View>
  );
};

const ViewPagerItem = ({
  item,
  onPress,
}: {
  item: MentalState;
  onPress: (id: number, isEverythingAnswered: boolean) => void;
}) => {
  const questions = useSelector(questionnaireById);
  const questionnarie = questions(item.id);

  const [questionsScore, setQuestionsScore] = useState<
    Array<{questionId: number; score: number}>
  >(
    questionnarie.map(question => {
      return {
        questionId: question.id,
        score: 0,
      };
    }),
  );

  const dispatch = useAppDispatch();

  const width = Dimensions.get('screen').width - 2 * Paddings.MEDIUM;

  const onPressHandle = (question: Question, score: number) => {
    let finalScore = 0;
    const result = questionsScore.map(questionScorePair => {
      if (questionScorePair.questionId === question.id) {
        questionScorePair.score = score;
      }
      finalScore += questionScorePair.score;
      return questionScorePair;
    });

    const invaliditem = questionsScore.find(questionScorePair => {
      if (questionScorePair.score === 0) {
        return questionScorePair;
      }
    });
    dispatch(addSurveyData({mentalStateId: item.id, score: finalScore}));
    onPress(item.id, invaliditem === undefined);
    setQuestionsScore(result);
  };

  return (
    <View key={item.id} style={[styles.item, {width}]}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {questionnarie.map(question => (
          <View style={styles.questionItem}>
            <QuestionItem question={question} onPress={onPressHandle} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const Circle = ({scrollX, index}: {index: number; scrollX: Animated.Value}) => {
  const width = Dimensions.get('screen').width - 2 * Paddings.MEDIUM;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const circleWidth = scrollX.interpolate({
    inputRange,
    outputRange: [7, 12, 7],
    extrapolate: 'clamp',
  });
  const bgColor = scrollX.interpolate({
    inputRange,
    outputRange: [Colors.GRAY, Colors.DARK_GREEN, Colors.GRAY],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.circle,
        {
          backgroundColor: bgColor,
          width: circleWidth,
          transform: [
            {
              translateX: index * 15,
            },
          ],
        },
      ]}
    />
  );
};

export const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  const {surveyData} = useSelector((state: RootState) => state.settings);
  const {mentalStates} = useSelector((state: RootState) => state.mentalStates);
  const [satisfiedAnswers, setSatisfiedAnswers] = useState<
    {mentalStateId: number; isFullAnswered: boolean}[]
  >(
    mentalStates.map(item => {
      return {mentalStateId: item.id, isFullAnswered: false};
    }),
  );
  const dispatch = useAppDispatch();
  useHeader(navigation, true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.WHITE,
      },
    });
  });

  const [pageNum, setPageNum] = useState(0);
  const ref = React.useRef<FlatList>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const navigatePage = () => {
    if (
      pageNum < mentalStates.length - 1 &&
      satisfiedAnswers[pageNum].isFullAnswered
    ) {
      setPageNum(pageNum + 1);
    } else if (
      pageNum === mentalStates.length - 1 &&
      satisfiedAnswers[pageNum].isFullAnswered
    ) {
      dispatch(toggleIsSurveyFinished(true));
      navigation.navigate(AppRoute.ANALYTICS_QUIZ_RESULTS);
    }
  };

  useEffect(() => {
    ref.current?.scrollToIndex({index: pageNum});
  }, [pageNum]);

  const handleOnPress = (id: number, isEverythinAnswered: boolean) => {
    const result = satisfiedAnswers.map(item => {
      if (item.mentalStateId === id) {
        item.isFullAnswered = isEverythinAnswered;
      }

      return item;
    });
    setSatisfiedAnswers(result);
  };
  console.log(JSON.stringify(surveyData));
  return (
    <SolidBackground isDark={false}>
      <View style={styles.container}>
        <Animated.FlatList
          ref={ref}
          style={styles.pagerView}
          data={mentalStates}
          bounces={false}
          scrollEnabled={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollOffsetAnimatedValue},
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          horizontal
          pagingEnabled
          renderItem={({item}) => (
            <ViewPagerItem item={item} onPress={handleOnPress} />
          )}
          keyExtractor={(item: MentalState) => item.id.toString()}
        />
        <CustomButton text="Nastavi" onPress={navigatePage} isDark={true} />
        <View style={styles.dots}>
          {mentalStates.map((item, index) => (
            <Circle
              scrollX={scrollOffsetAnimatedValue}
              index={index}
              key={item.id}
            />
          ))}
        </View>
      </View>
    </SolidBackground>
  );
};
