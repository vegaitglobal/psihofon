import styles from './style';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';
import React, {useRef, useState} from 'react';
import {TitleText} from '../titleText/TitleText';
import Search from '../../../assets/icons/Search.svg';
import {TextInput} from 'react-native-gesture-handler';
import CloseIcon from '../../../assets/icons/Close.svg';
import {Animated, Dimensions, Keyboard, Pressable, View} from 'react-native';

interface Props {
  placeholder: string;
  inputValue: string;
  onTextChange: (inputText: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  placeholder,
  inputValue,
  onTextChange,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const [placeholderWidth, setPlaceholderWidth] = useState(0);
  const positionXPlaceholder = useRef(new Animated.Value(0)).current;
  const positionXSearchBar = useRef(new Animated.Value(screenWidth)).current;
  const textInputRef = useRef<any>(null);

  const animateInComponents = () => {
    Animated.parallel([
      Animated.timing(positionXPlaceholder, {
        toValue: -(placeholderWidth + Margins.MEDIUM),
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(positionXSearchBar, {
        toValue: -screenWidth + 2 * Margins.MEDIUM,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateOutComponents = () => {
    Animated.parallel([
      Animated.timing(positionXPlaceholder, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(positionXSearchBar, {
        toValue: screenWidth,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Animated.View
          style={[
            {
              transform: [{translateX: positionXPlaceholder}],
            },
            styles.placeholderText,
          ]}
          onLayout={e => setPlaceholderWidth(e.nativeEvent.layout.width)}>
          <TitleText>{placeholder}</TitleText>
        </Animated.View>
        <Pressable
          style={styles.searchButton}
          onPress={() => {
            textInputRef.current.focus();
            animateInComponents();
          }}>
          <Search />
        </Pressable>
      </View>
      <Animated.View
        style={{
          ...styles.barContainer,
          ...{transform: [{translateX: positionXSearchBar}]},
        }}>
        <TextInput
          value={inputValue}
          selectionColor={Colors.DARK_GREEN}
          style={styles.textInput}
          onChangeText={e => onTextChange(e)}
          ref={textInputRef}
          onBlur={animateOutComponents}
        />
        <Pressable
          style={styles.closeIcon}
          onPress={() => {
            onTextChange('');
            Keyboard.dismiss();
            animateOutComponents();
          }}>
          <CloseIcon
            height={20}
            width={20}
            fill={Colors.WHITE}
            color={Colors.WHITE}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
};
