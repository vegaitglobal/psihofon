import React from 'react';
import {View} from 'react-native';

interface CenterContainerProps {
  children: React.ReactNode;
}

export const CenterContainer: React.FC<CenterContainerProps> = ({
  children,
}: CenterContainerProps) => {
  return (
    <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
      {children}
    </View>
  );
};
