import React from 'react';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Pressable, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {useHeader} from '../../hooks/useHeader';
import {ExerciseListScreenProps} from '../../navigation/CrisisNavigator';
import {TitleText} from '../../components/titleText/TitleText';
import Search from '../../../assets/icons/Search.svg';
import styles from './style';
import {MentalState} from '../../models/MentalState';

export interface ExerciseListScreenParams {
  mentalState: MentalState;
}

export const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({
  navigation,
  route,
}) => {
  const {mentalState} = route.params;

  useHeader(navigation);
  return (
    <SolidBackground isDark={true}>
      <View style={styles.header}>
        <TitleText style={styles.titleContainer}>{mentalState.name}</TitleText>
        <Pressable style={styles.iconAlign}>
          <Search />
        </Pressable>
      </View>
      <FlatList
        data={mentalState.exercise}
        // style={style.list}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={style.separator} />}
        renderItem={({item}) => (
          <CustomButton
            isDark={false}
            text={item.title}
            onPress={() => console.log(item)}
          />
        )}
      />
    </SolidBackground>
  );
};
