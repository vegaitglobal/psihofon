import React from 'react';
import style from './style';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Title} from '../../components/title/Title';
import {Text, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {ExcerciseOverviewScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {useHeader} from '../../hooks/useHeader';

const buttonsList: string[] = [
  'Vežbe za anksioznost',
  'Vežbe za tugu',
  'Antistres vežbe',
  'Vežbe za nisko samopoštovanje',
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
              keyExtractor={(item: string) => item}
              ItemSeparatorComponent={() => <View style={style.separator} />}
              renderItem={({item}) => (
                <CustomButton
                  isDark={false}
                  text={item}
                  onPress={() => console.log(item)}
                />
              )}
            />
            <Text style={style.textButton}>
              Pogledaj prethodne rezultate testa
            </Text>
          </View>
        </View>
        <CustomButton
          isDark={false}
          style={style.bottomButton}
          text="Želim ponovo da radim test!"
          onPress={() => console.log('Želim ponovo da radim test!')}
        />
      </SolidBackground>
    );
  };
