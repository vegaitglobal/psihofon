import React from 'react';
import {View} from 'react-native';
import {ComplexBackground} from '../../components/ComplexBackground/ComplexBackground';
import {MenuScreenProps} from '../../navigation/RootNavigator';
import style from './style';

export const MenuScreen: React.FC<MenuScreenProps> = () => {
  return (
    <View style={style.container}>
      <ComplexBackground
        //TODO These are just placeholders
        upperContent={<View style={{width: 100, height: 100}} />}
        lowerContent={<View style={{width: 100, height: 100}} />}
      />
    </View>
  );
};
