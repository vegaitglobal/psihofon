import React, {useLayoutEffect, useRef} from 'react';
import style from './style';
import {View, ScrollView, StatusBar, Pressable} from 'react-native';
import {InstructionsScreenProps} from '../../navigation/RootNavigator';
import Logo from '../../../assets/icons/Logo.svg';
import {Colors} from '../../styles/colors';
import {useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {CustomText} from '../../components/customText/CustomText';
import {AppRoute} from '../../navigation/routes';
import {toggleIsFirstUsage} from '../../reducers/instructionReducer';

export const InstructionsScreen: React.FC<InstructionsScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {instruction} = useSelector((state: RootState) => state.instruction);

  const scrollRef = useRef<ScrollView>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
      headerStyle: {
        backgroundColor: Colors.PALE_GREY,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const handlePress = () => {
    dispatch(toggleIsFirstUsage(false));
    navigation.navigate(AppRoute.INTRO_MENU);
  };

  const Introduction = () => {
    return (
      <View>
        <CustomText style={style.instructionTitle}>
          {instruction?.title}
        </CustomText>
        <CustomText style={style.introduction}>
          {instruction?.introduction}
        </CustomText>
      </View>
    );
  };

  const Description = () => {
    return (
      <View>
        <CustomText style={style.description}>
          {instruction?.description}
        </CustomText>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.PALE_GREY} />
      <View style={style.container}>
        <ScrollView
          ref={scrollRef}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}
          style={style.scrollView}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <Introduction />
          <Description />
          <Pressable style={style.homePageButton} onPress={handlePress}>
            <CustomText>Početna stranica</CustomText>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
};
