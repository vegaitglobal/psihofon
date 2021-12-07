import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {CustomText} from '../../components/customText/CustomText';
import {ScaleExplanationItem} from '../../components/scaleExplanationItem/ScaleExplanationItem';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {TitleText} from '../../components/titleText/TitleText';
import {useHeader} from '../../hooks/useHeader';
import {AppRoute} from '../../navigation/routes';
import {ScaleExplanationScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {
  getQuestionnaire,
  questionnarieAnswers,
} from '../../reducers/questionnairesReducer';
import {RootState} from '../../reducers/rootReducer';
import {useAppDispatch} from '../../store/store';
import styles from './style';

export const ScaleExplanationScreen: React.FC<ScaleExplanationScreenProps> = ({
  navigation,
}) => {
  useHeader(navigation);
  const {isSurveyFinished} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  const scaleGrades = useSelector(questionnarieAnswers);

  useEffect(() => {
    dispatch(getQuestionnaire());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SolidBackground isDark={true}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={scaleGrades}
        ListHeaderComponent={
          <View style={styles.headerArea}>
            <TitleText>Skala odgovora</TitleText>
            <CustomText style={styles.descriptionText}>
              U sledećim pitanjima odgovore dajete prema skali koja definiše
              meru u kojoj vas opisuju navedene situacije. Skalu smo definisali
              na sledeći način:
            </CustomText>
          </View>
        }
        ListFooterComponent={
          <>
            <CustomButton
              style={styles.buttonSpacing}
              text={'Nastavi'}
              isDark={false}
              onPress={() => navigation.push(AppRoute.QUIZ)}
            />
            {isSurveyFinished && (
              <CustomButton
                style={styles.skipButton}
                text={'Preskoči upitnik'}
                isDark={false}
                onPress={() => navigation.navigate(AppRoute.EXCERCISE_OVERVIEW)}
              />
            )}
          </>
        }
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => (
          <View style={styles.scaleItemContainer}>
            <ScaleExplanationItem
              style={styles.scaleSpacing}
              buttonText={item.orderNumber.toString()}
              labelText={item.text}
            />
          </View>
        )}
      />
    </SolidBackground>
  );
};
