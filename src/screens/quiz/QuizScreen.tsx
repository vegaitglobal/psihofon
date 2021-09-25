import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {useLightHeader} from '../../hooks/useDarkHeader';
import {QuizScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {RootState} from '../../reducers/rootReducer';
import {useAppDispatch} from '../../store/store';
import styles from './style';

export const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  const {isLoggedIn} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  useLightHeader(navigation);

  return (
    <SolidBackground isDark={false}>
      <View />
    </SolidBackground>
  );
};
