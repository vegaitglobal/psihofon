import React from 'react';
import styles from './style';
import {Colors} from '../../../styles/colors';
import {CustomText} from '../../customText/CustomText';
import {ButtonSizes, ButtonTheme} from '../../../constants/enums';
import {Pressable, PressableProps, TextStyle, ViewStyle} from 'react-native';

interface Props {
  text: string;
  onPress?: () => void; //! If we want to handle the press event here.
  isPressed?: boolean;
  theme?: ButtonTheme;
  size?: ButtonSizes;
  style?: ViewStyle;
}

export const CircleButton: React.FC<Props & PressableProps> = ({
  text,
  onPress,
  style,
  isPressed,
  theme = ButtonTheme.WHITE_GREEN,
  size = ButtonSizes.BIG,
}) => {
  let backgroundColor;
  let textColor;
  let fontStyle: TextStyle;
  let buttonStyle: ViewStyle;

  switch (theme) {
    case ButtonTheme.GRAY_BLACK:
      backgroundColor = Colors.GRAY;
      textColor = Colors.GRAY_LIGHT;
      break;
    case ButtonTheme.WHITE_GREEN:
    default:
      backgroundColor = Colors.WHITE;
      textColor = Colors.DARK_GREEN;
  }

  let buttonDimension;
  switch (size) {
    case ButtonSizes.SMALL:
      buttonDimension = 40;
      buttonStyle = {
        height: buttonDimension,
        width: buttonDimension,
        borderRadius: buttonDimension / 2,
      };
      fontStyle = {
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 15,
        fontWeight: '400',
      };
      break;
    case ButtonSizes.BIG:
    default:
      buttonDimension = 50;
      buttonStyle = {
        height: buttonDimension,
        width: buttonDimension,
        borderRadius: buttonDimension / 2,
      };
      fontStyle = {
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 15,
        fontWeight: '700',
      };
  }

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: isPressed ? Colors.DARK_GREEN : backgroundColor},
        buttonStyle,
        style,
      ]}
      onPress={onPress}>
      <CustomText
        style={[
          styles.text,
          {color: isPressed ? Colors.WHITE : textColor},
          fontStyle,
        ]}>
        {text}
      </CustomText>
    </Pressable>
  );
};
