import React, {useState} from 'react';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {FlatList, Keyboard, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {useHeader} from '../../hooks/useHeader';
import styles from './style';
import {ExerciseListScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {SearchBar} from '../../components/searchBar/SearchBar';
import {FadeAnimation} from '../../components/fadeAnimation/FadeAnimation';
import {useSelector} from 'react-redux';
import {mentalStateExercisesByIdAndQuery} from '../../reducers/mentalStatesReducer';
import {AppRoute} from '../../navigation/routes';

export interface ExerciseListScreenParams {
  id: number;
}

export const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({
  navigation,
  route,
}) => {
  const exerciseSelector = useSelector(mentalStateExercisesByIdAndQuery);

  const {id} = route.params;
  const [searchText, setSearchText] = useState('');

  const data = exerciseSelector(id, searchText);

  useHeader(navigation);
  return (
    <SolidBackground
      isDark={true}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.header}>
        <SearchBar
          placeholder={'Vezbe za anksioznost'}
          setSearchText={setSearchText}
        />
      </View>
      <FadeAnimation>
        <FlatList
          data={data}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <CustomButton
              isDark={false}
              text={item.title}
              onPress={() =>
                navigation.navigate(AppRoute.SECOND_EXCERCISE_SCREEN, {
                  mentalStateId: id,
                  exerciseId: item.id,
                })
              }
            />
          )}
        />
      </FadeAnimation>
    </SolidBackground>
  );
};
