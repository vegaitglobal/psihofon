import React from 'react';
import {Colors} from '../../styles/colors';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({text}: TitleProps) => {
  return (
    <CustomText style={{color: Colors.WHITE, fontSize: 24, fontWeight: 'bold'}}>
      {text}
    </CustomText>
  );
};
