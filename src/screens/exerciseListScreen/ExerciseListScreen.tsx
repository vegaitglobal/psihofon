import React from 'react';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {useHeader} from '../../hooks/useHeader';
import styles from './style';
import {ExerciseListScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {SearchBar} from '../../components/searchBar/SearchBar';

export interface ExerciseListScreenParams {
  id: number;
}

export const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({
  navigation,
  route,
}) => {
  const {id} = route.params;
  console.log('ID> ', id);

  useHeader(navigation);
  return (
    <SolidBackground isDark={true}>
      <View style={styles.header}>
        <SearchBar placeholder={'Vezbe za anksioznost'} />
      </View>
      <FlatList
        data={[]}
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
