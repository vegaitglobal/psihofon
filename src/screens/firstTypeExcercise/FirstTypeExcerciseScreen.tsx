import React from 'react';
import style from './style';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Title} from '../../components/title/Title';
import {Text, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {FirstTypeExcercieScreenProps} from '../../navigation/SecondExcercisesNavigator';

const buttonsList: string[] = [
  'Vezbe za anksioznost',
  'Vezbe za tugu',
  'Antistres vezbe',
  'Vezbe za nisko samopostovanje',
];

export const FirstTypeExcercieScreen: React.FC<FirstTypeExcercieScreenProps> =
  ({navigation}: FirstTypeExcercieScreenProps) => {
    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <View>
            <Title text="Spisak vezbi" />
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
          text="Zelim ponovo da radim test!"
          onPress={() => console.log('Zelim ponovo da radim test!')}
        />
      </SolidBackground>
    );
  };
