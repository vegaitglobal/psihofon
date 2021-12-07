import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AnalyticsQuizResultItem} from '../../components/analyticsQuizResultItem/AnalyticsQuizResultItem';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {TitleText} from '../../components/titleText/TitleText';
import {useHeader} from '../../hooks/useHeader';
import {MentalState} from '../../models/MentalState';
import {AppRoute} from '../../navigation/routes';
import {AnalyticsQuizResultsScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {RootState} from '../../reducers/rootReducer';
import style from './style';

const ListItem = ({item}: {item: MentalState}) => {
  const {surveyData} = useSelector((state: RootState) => state.settings);
  const {answers} = useSelector(
    (state: RootState) => state.questionnaire.questionnaires,
  );

  const points = surveyData.find(data => data.mentalStateId === item.id);

  const scaleDivider = 0.04 * answers.length; //! We have scale from 1-5 (values should start from 0-4). We want to map 0-4 to 0-100, so we need to 4/100 = 0.04 :)
  const scaledPoints =
    points!.score >= answers.length ? points!.score - answers.length : 0;
  const percentage = scaledPoints / scaleDivider || 0; //! If scaledPoints === 0, then 0 will be returned.

  return (
    <AnalyticsQuizResultItem
      analyticsQuizResultItem={{
        percentage: Math.round(percentage).toString(),
        title: item.name,
      }}
    />
  );
};

export const AnalyticsQuizResultsScreen: React.FC<AnalyticsQuizResultsScreenProps> =
  ({navigation}: AnalyticsQuizResultsScreenProps) => {
    const {mentalStates} = useSelector(
      (state: RootState) => state.mentalStates,
    );

    useHeader(navigation);

    return (
      <SolidBackground isDark={true}>
        <View style={style.upperArea}>
          <View>
            <TitleText>{'Analiza'}</TitleText>
            <FlatList
              data={mentalStates}
              showsVerticalScrollIndicator={false}
              style={style.list}
              ItemSeparatorComponent={() => <View style={style.separator} />}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <ListItem item={item} />}
            />
          </View>
        </View>
        <View style={style.lowerArea}>
          <CustomButton
            isDark={false}
            onPress={() => navigation.navigate(AppRoute.EXCERCISE_OVERVIEW)}
            text="Pogledaj vežbe"
          />
        </View>
      </SolidBackground>
    );
  };
