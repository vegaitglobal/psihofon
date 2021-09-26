import React, {ReactNode, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  GestureResponderEvent,
} from 'react-native';
import { ComplexBackground } from '../../components/complexBackground/ComplexBackground';
import style from './style';

interface GeneralExerciseScreenProps {
  upperContent: ReactNode;
  lowerContent?: ReactNode;
}

interface BackToBeginningButtonProps {
  onPress: (e: GestureResponderEvent) => void;
}

const BackToBeginningButton: React.FC<BackToBeginningButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={style.buttonContainer} onPress={onPress}>
      <Text style={style.buttonText}>Vrati se na početak</Text>
    </TouchableOpacity>
  );
};

export const GeneralExerciseScreen: React.FC<GeneralExerciseScreenProps> = ({
  upperContent,
  lowerContent,
}) => {
  const [displayScrollToTopButton, setDisplayScrollToTopButton] =
    useState(false);

  const scrollRef = useRef<ScrollView>(null);

  const handlePress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleScroll = () => {
    setDisplayScrollToTopButton(true);
  };

  return (
    <View style={style.root}>
      <ScrollView
        onScrollBeginDrag={handleScroll}
        ref={scrollRef}
        scrollEnabled
        style={style.root}
        bounces={false}>
        <ComplexBackground
          upperContent={upperContent}
          lowerContent={lowerContent}
        />
        {displayScrollToTopButton && (
          <BackToBeginningButton onPress={handlePress} />
        )}
      </ScrollView>
    </View>
  );
};
