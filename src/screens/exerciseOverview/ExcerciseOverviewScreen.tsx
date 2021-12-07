import React from 'react';
import style from './style';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {FlatList, Pressable, Text, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {ExcerciseOverviewScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {useHeader} from '../../hooks/useHeader';
import {AppRoute} from '../../navigation/routes';
import {TitleText} from '../../components/titleText/TitleText';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';

export const ExcerciseOverviewScreen: React.FC<ExcerciseOverviewScreenProps> =
  ({navigation}) => {
    const {mentalStates} = useSelector(
      (state: RootState) => state.mentalStates,
    );
    const {isSurveyFinished} = useSelector(
      (state: RootState) => state.settings,
    );
    useHeader(navigation);

    return (
      <SolidBackground isDark={true}>
        <View style={style.centerContainer}>
          <View>
            <TitleText>{'Spisak vežbi'}</TitleText>
            <FlatList
              data={mentalStates}
              style={style.list}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={style.separator} />}
              renderItem={({item}) => (
                <CustomButton
                  key={item.id}
                  isDark={false}
                  text={item.exerciseListLabel}
                  onPress={() =>
                    navigation.navigate(AppRoute.EXERCISE_LIST, {
                      id: item.id,
                    })
                  }
                />
              )}
            />
            {isSurveyFinished && (
              <Pressable
                onPress={() =>
                  navigation.navigate(AppRoute.ANALYTICS_QUIZ_RESULTS)
                }>
                <Text style={style.textButton}>
                  Pogledaj prethodne rezultate testa
                </Text>
              </Pressable>
            )}
          </View>
        </View>
        <View style={style.lowerArea}>
          <CustomButton
            isDark={false}
            style={style.bottomButton}
            text={`Želim ${!isSurveyFinished ? '' : 'ponovo'} da radim test!`}
            onPress={() => navigation.navigate(AppRoute.SCALE_EXPLANATION)}
          />
        </View>
      </SolidBackground>
    );
  };
