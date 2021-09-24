import React from 'react';
import {Button, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomText} from '../../components/customText/CustomText';
import {MenuScreenProps} from '../../navigation/RootNavigator';
import {RootState} from '../../reducers/rootReducer';
import {changeLogInState} from '../../reducers/settingsReducer';
import {useAppDispatch} from '../../store/store';
import Logo from './../../../assets/icons/Logo.svg';
import styles from './style';

export const MenuScreen: React.FC<MenuScreenProps> = () => {
  const {isLoggedIn} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <CustomText>
        Is user logged in: {isLoggedIn ? 'true' : 'false'}
      </CustomText>
      <Button
        onPress={() => dispatch(changeLogInState(!isLoggedIn))}
        title="Change user state"
      />
    </View>
  );
};
