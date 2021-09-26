import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AnalyticsQuizResultItem} from '../../components/analyticsQuizResultItem/AnalyticsQuizResultItem';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Title} from '../../components/title/Title';
import {useHeader} from '../../hooks/useHeader';
import {MentalState} from '../../models/MentalState';
import {AnalyticsQuizResultsScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {RootState} from '../../reducers/rootReducer';
import {Paddings} from '../../styles/paddings';
import style from './style';

const ListItem = ({item}: {item: MentalState}) => {
  const {surveyData} = useSelector((state: RootState) => state.settings);
  const {answers} = useSelector(
    (state: RootState) => state.questionnaire.questionnaires,
  );

  const maxPoints = answers[answers.length - 1].orderNumber * answers.length;

  const points = surveyData.find(data => data.mentalStateId === item.id);

  const percentage = (points!.score / maxPoints) * 100;

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
        <View style={style.centerContainer}>
          <View style={{paddingHorizontal: Paddings.MEDIUM}}>
            <Title text="Analiza" />
            <FlatList
              data={mentalStates}
              showsVerticalScrollIndicator={false}
              style={style.list}
              ItemSeparatorComponent={() => <View style={style.separator} />}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <ListItem item={item} />}
            />
          </View>
          <CustomButton
            isDark={false}
            onPress={() => console.log('Pogledaj vežbe')}
            text="Pogledaj vežbe"
          />
        </View>
      </SolidBackground>
    );
  };
