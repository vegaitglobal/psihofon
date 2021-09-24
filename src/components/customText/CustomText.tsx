import React from 'react';
import {Text, TextProps} from 'react-native';
import styles from './style';

type Props = TextProps;

export const CustomText: React.FC<Props> = ({children, ...props}) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[props.style, styles.text]}>
      {children}
    </Text>
  );
};
