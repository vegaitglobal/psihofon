import React from 'react';
import styles from './style';
import {Colors} from '../../constants/colors';
import {CustomText} from '../customText/CustomText';
import {Pressable, PressableProps, View, ViewStyle} from 'react-native';

export enum ButtonTheme {
  DEFAULT, //! Green background, white text.
  INVERTED, //! White background, black text.
}

interface Props {
  text: string;
  onPress: () => void;
  theme?: ButtonTheme;
  style?: ViewStyle;
}

export const CustomButton: React.FC<Props & PressableProps> = ({
  text,
  onPress,
  style,
  theme = ButtonTheme.DEFAULT,
}) => {
  let backgroundColor;
  let textColor;

  switch (theme) {
    case ButtonTheme.INVERTED:
      backgroundColor = Colors.WHITE;
      textColor = Colors.BLACKISH_TEXT;
      break;
    case ButtonTheme.DEFAULT:
    default:
      backgroundColor = Colors.DEFAULT;
      textColor = Colors.WHITE;
  }

  return (
    <Pressable
      style={[styles.container, {backgroundColor: backgroundColor}, style]}
      onPress={onPress}>
      <View style={styles.textContainer}>
        <CustomText style={[styles.text, {color: textColor}]}>
          {text}
        </CustomText>
      </View>
    </Pressable>
  );
};
