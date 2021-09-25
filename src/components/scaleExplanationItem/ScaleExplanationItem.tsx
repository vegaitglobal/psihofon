import React from 'react';
import styles from './style';
import {ViewStyle, View} from 'react-native';
import {CustomText} from '../customText/CustomText';
import {CircleButton} from '../buttons/circleButton/CircleButton';

interface Props {
  buttonText: string;
  labelText: string;
  style?: ViewStyle;
}

export const ScaleExplanationItem: React.FC<Props> = ({
  buttonText,
  labelText,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <CircleButton text={buttonText} {...props} />
      <View style={styles.labelSpacing}>
        <CustomText style={styles.labelText}>{labelText}</CustomText>
      </View>
      <View />
    </View>
  );
};
