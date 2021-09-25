import React from 'react';
import styles from './style';
import {Colors} from '../../../styles/colors';
import {ButtonTheme} from '../../../constants/enums';
import {CustomText} from '../../customText/CustomText';
import {Pressable, PressableProps, View, ViewStyle} from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  theme?: ButtonTheme;
  style?: ViewStyle;
}

export const BigButton: React.FC<Props & PressableProps> = ({
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
      backgroundColor = Colors.DARK_GREEN;
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
