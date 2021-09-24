import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MenuScreenProps} from '../../navigation/RootNavigator';
import {RootState} from '../../reducers/rootReducer';
import {changeLogInState} from '../../reducers/settingsReducer';
import {useAppDispatch} from '../../store/store';
import Logo from './../../../assets/icons/Logo.svg';
import style from './style';

export const MenuScreen: React.FC<MenuScreenProps> = () => {
  const {isLoggedIn} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <Text>Is user logged in: {isLoggedIn ? 'true' : 'false'}</Text>
      <Button
        onPress={() => dispatch(changeLogInState(!isLoggedIn))}
        title="Change user state"
      />
    </View>
  );
};
