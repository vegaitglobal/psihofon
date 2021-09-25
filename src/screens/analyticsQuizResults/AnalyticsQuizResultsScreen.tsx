import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  AnalyticsQuizResultItem,
  AnalyticsQuizResultItemModel,
} from '../../components/analyticsQuizResultItem/AnalyticsQuizResultItem';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {TitleText} from '../../components/titleText/TitleText';
import {useHeader} from '../../hooks/useHeader';
import {AnalyticsQuizResultsScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {Paddings} from '../../styles/paddings';
import style from './style';

const scores: AnalyticsQuizResultItemModel[] = [
  {title: 'Anksioznost', percentage: '50%'},
  {title: 'Tuga', percentage: '25%'},
  {title: 'Stres', percentage: '10%'},
  {title: 'Nisko samopoštovanje', percentage: '15%'},
];

export const AnalyticsQuizResultsScreen: React.FC<AnalyticsQuizResultsScreenProps> =
  ({navigation}: AnalyticsQuizResultsScreenProps) => {
    useHeader(navigation);
    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <View style={{paddingHorizontal: Paddings.MEDIUM}}>
            <TitleText>{'Analiza'}</TitleText>
            {scores && (
              <FlatList
                data={scores}
                showsVerticalScrollIndicator={false}
                style={style.list}
                ItemSeparatorComponent={() => <View style={style.separator} />}
                keyExtractor={(item: {title: string}) => item.title}
                renderItem={({item}) => (
                  <AnalyticsQuizResultItem analyticsQuizResultItem={item} />
                )}
              />
            )}
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
