import React from 'react';
import {ViewStyle} from 'react-native';
import {Colors} from '../../constants/colors';
import {CustomText} from '../customText/CustomText';

interface Props {
  title: string;
  isWhite?: boolean;
  style?: ViewStyle;
}

export const TitleText: React.FC<Props> = ({
  title,
  isWhite = true,
  style,
  ...props
}) => {
  const titleColor = isWhite ? Colors.WHITE : Colors.GREEN;
  return (
    <CustomText style={[{color: titleColor}, style]} {...props}>
      {title}
    </CustomText>
  );
};
