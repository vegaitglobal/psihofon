import {Animated} from 'react-native';
import React, {useRef, useEffect, useState, useCallback} from 'react';

export enum AnimationSpeed {
  SLOW = 2000,
  MEDIUM = 1000,
  FAST = 300,
}

interface AnimatedCustomTextProps {
  children: React.ReactChild; //! Element to wrap.
  animated?: boolean; //! Set it to false if you want to prevent the animation behavior. This also can be handled dynamically.
  animationSpeed?: AnimationSpeed | number; //! You can use custom value for animation speed.
}

export const FadeAnimation: React.FC<AnimatedCustomTextProps> = ({
  animated = true,
  animationSpeed = AnimationSpeed.FAST,
  children,
}) => {
  const fadeAnimation = useRef(new Animated.Value(animated ? 0 : 1)).current;
  const [currentChildren, setCurrentChildren] = useState(children); //! This one is needed for "synchronously" display the changes.

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: animationSpeed,
      useNativeDriver: true,
    }).start();
  }, [animationSpeed, fadeAnimation]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: animationSpeed,
      useNativeDriver: true,
    }).start(() => setCurrentChildren(children));
  }, [animationSpeed, children, fadeAnimation]);

  useEffect(() => {
    if (animated) {
      if (currentChildren === children) {
        fadeIn();
      } else {
        fadeOut();
      }
    } else {
      setCurrentChildren(children);
    }
  }, [currentChildren, fadeIn, children, fadeOut, animated]);

  return animated ? (
    <Animated.View style={{opacity: fadeAnimation}}>
      {currentChildren}
    </Animated.View>
  ) : (
    <>{currentChildren}</>
  );
};
