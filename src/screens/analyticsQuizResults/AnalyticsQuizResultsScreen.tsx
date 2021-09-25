import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  AnalyticsQuizResultItem,
  AnalyticsQuizResultItemModel,
} from '../../components/analyticsQuizResultItem/AnalyticsQuizResultItem';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Title} from '../../components/title/Title';
import {AnalyticsQuizResultsScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {Paddings} from '../../styles/paddings';
import style from './style';

const scores: AnalyticsQuizResultItemModel[] = [
  {title: 'Anksioznost', percentage: '50%'},
  {title: 'Tuga', percentage: '25%'},
  {title: 'Stres', percentage: '10%'},
  {title: 'Nisko samopostovanje', percentage: '15%'},
];

export const AnalyticsQuizResultsScreen: React.FC<AnalyticsQuizResultsScreenProps> =
  ({navigation}: AnalyticsQuizResultsScreenProps) => {
    //todo hook za useDarkHeader
    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <View style={{paddingHorizontal: Paddings.MEDIUM}}>
            <Title text="Analiza" />
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
            onPress={() => console.log('test')}
            text="Pogledaj vezbe"
          />
        </View>
      </SolidBackground>
    );
  };
