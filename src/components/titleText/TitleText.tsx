import React from 'react';
import styles from './style';
import {ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {CustomText} from '../customText/CustomText';

interface Props {
  isWhite?: boolean;
  style?: ViewStyle;
}

export const TitleText: React.FC<Props> = ({
  children,
  isWhite = true,
  style,
  ...props
}) => {
  const titleColor = isWhite ? Colors.WHITE : Colors.DARK_GREEN;
  return (
    <CustomText
      style={[styles.titleText, {color: titleColor}, style]}
      {...props}>
      {children}
    </CustomText>
  );
};
