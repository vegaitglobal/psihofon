import React, {useState} from 'react';
import {
  TextLayoutEventData,
  TextStyle,
  NativeSyntheticEvent,
  Text,
} from 'react-native';

interface AdjustableFontTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const AdjustableFontText: React.FC<AdjustableFontTextProps> = ({
  children,
  style,
}) => {
  const [fontSize, setFontSize] = useState(style?.fontSize || 12);

  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const {lines} = e.nativeEvent;

    if (lines.length > 1) {
      setFontSize(prev => prev - 1);
    }
  };

  return (
    <Text onTextLayout={onTextLayout} style={{...style, fontSize}}>
      {children}
    </Text>
  );
};
