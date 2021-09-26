import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface BackToBeginningButtonProps {
  onPress: (e: GestureResponderEvent) => void;
}

export const BackToBeginningButton: React.FC<BackToBeginningButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={style.buttonContainer} onPress={onPress}>
      <CustomText style={style.buttonText}>Vrati se na početak</CustomText>
    </TouchableOpacity>
  );
};
