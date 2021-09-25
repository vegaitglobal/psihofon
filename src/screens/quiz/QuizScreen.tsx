import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
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
import {
  getQuestionnaire,
  questionnaireById,
} from '../../reducers/questionnairesReducer';
import {CustomText} from '../../components/customText/CustomText';
import {CircleButton} from '../../components/buttons/circleButton/CircleButton';
import {addSurveyData} from '../../reducers/settingsReducer';
import {Question} from '../../models/Questionnaire';
import {ButtonTheme} from '../../constants/enums';

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
      <CustomText>{question.text}</CustomText>
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
          />
        ))}
      </View>
    </View>
  );
};

const ViewPagerItem = ({item}: {item: MentalState}) => {
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

    dispatch(addSurveyData({mentalStateId: item.id, score: finalScore}));
    setQuestionsScore(result);
  };

  return (
    <View key={item.id} style={[styles.item, {width}]}>
      <ScrollView style={styles.content}>
        {questionnarie.map(question => (
          <QuestionItem question={question} onPress={onPressHandle} />
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
  const {isLoggedIn} = useSelector(
    (state: RootState) => state.questionnaire.questionnaires,
  );
  const {surveyData} = useSelector((state: RootState) => state.settings);
  const {mentalStates} = useSelector((state: RootState) => state.mentalStates);
  const dispatch = useAppDispatch();

  useHeader(navigation, true);

  const [pageNum, setPageNum] = useState(0);
  const ref = React.useRef<FlatList>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(getQuestionnaire());
  }, []);

  const navigatePage = () => {
    if (pageNum < mentalStates.length - 1 || surveyData[pageNum].score >= 5) {
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    ref.current?.scrollToIndex({index: pageNum});
  }, [pageNum]);

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
          renderItem={({item}) => <ViewPagerItem item={item} />}
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
