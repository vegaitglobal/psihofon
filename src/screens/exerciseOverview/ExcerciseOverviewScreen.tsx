import React from 'react';
import style from './style';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Title} from '../../components/title/Title';
import {Text, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {ExcerciseOverviewScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {useHeader} from '../../hooks/useHeader';
import {AppRoute} from '../../navigation/routes';

const buttonsList = [
  {id: 1, title: 'Vežbe za anksioznost'},
  {id: 2, title: 'Vežbe za tugu'},
  {id: 3, title: 'Antistres vežbe'},
  {id: 4, title: 'Vežbe za nisko samopoštovanje'},
];

export const ExcerciseOverviewScreen: React.FC<ExcerciseOverviewScreenProps> =
  ({navigation}: ExcerciseOverviewScreenProps) => {
    useHeader(navigation);

    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <View>
            <Title text="Spisak vežbi" />
            <FlatList
              data={buttonsList}
              style={style.list}
              showsVerticalScrollIndicator={false}
              // keyExtractor={(item: string) => item}
              ItemSeparatorComponent={() => <View style={style.separator} />}
              renderItem={({item}) => (
                <CustomButton
                  key={item.id}
                  isDark={false}
                  text={item.title}
                  onPress={() =>
                    navigation.navigate(AppRoute.EXERCISE_LIST, {
                      id: item.id,
                    })
                  }
                />
              )}
            />
            <Text style={style.textButton}>
              Pogledaj prethodne rezultate testa
            </Text>
          </View>
        </View>
        <View style={style.lowerArea}>
          <CustomButton
            isDark={false}
            style={style.bottomButton}
            text="Želim ponovo da radim test!"
            onPress={() => console.log('Želim ponovo da radim test!')}
          />
        </View>
      </SolidBackground>
    );
  };
