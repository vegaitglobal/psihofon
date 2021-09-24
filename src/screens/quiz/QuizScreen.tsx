import React from 'react';
import {Button, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {QuizScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {RootState} from '../../reducers/rootReducer';
import {changeLogInState} from '../../reducers/settingsReducer';
import {useAppDispatch} from '../../store/store';
import Logo from './../../../assets/icons/Logo.svg';
import styles from './style';

export const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  const {isLoggedIn} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  return (
    <SolidBackground
      isDark={false}
      onPressMenu={() => navigation.toggleDrawer()}>
      <View />
    </SolidBackground>
  );
};
