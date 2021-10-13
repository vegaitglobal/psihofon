import React, {useEffect, useLayoutEffect} from 'react';
import styles from './style';
import {Pressable, View, StatusBar, Button} from 'react-native';
import {ButtonTheme} from '../../constants/enums';
import {CustomText} from '../../components/customText/CustomText';
import {IntroMenuScreenProps} from '../../navigation/RootNavigator';
import {BigButton} from '../../components/buttons/bigButton/BigButton';
import Logo from '../../../assets/icons/Logo.svg';
import {AppRoute} from '../../navigation/routes';
import {Colors} from '../../styles/colors';
import {useAppDispatch} from '../../store/store';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';
import {toggleIsFirstUsage} from '../../reducers/settingsReducer';
import {getOrganizations} from '../../reducers/organizationsSlice';
import {getMentalStates} from '../../reducers/mentalStatesReducer';
import {getCrisisExercises} from '../../reducers/crisisExcercisesReducer';
import {getQuestionnaire} from '../../reducers/questionnairesReducer';
import {
  getSelfEmpowermentExercises,
  isExerciseDue,
  setFirstUsageDateAsPresent,
} from '../../reducers/selfEmpowermentExercises';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  AndroidStyle,
  AndroidVisibility,
  EventType,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

export const IntroMenuScreen: React.FC<IntroMenuScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const {isFirstUsafe} = useSelector((state: RootState) => state.settings);
  const {dateOfTheFirstUsage} = useSelector(
    (state: RootState) => state.selfEmpowerment,
  );

  useEffect(() => {
    if (isFirstUsafe) {
      dispatch(setFirstUsageDateAsPresent());
      dispatch(toggleIsFirstUsage(false));
    }

    dispatch(getOrganizations());
    dispatch(getSelfEmpowermentExercises());
    dispatch(getMentalStates());
    dispatch(getCrisisExercises());
    dispatch(getQuestionnaire());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Logo />,
      headerStyle: {
        backgroundColor: Colors.PALE_GREY,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const notifications: NotificationItems = {
    basic: {
      title: 'Basic',
      body: 'notification',
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
      },
      ios: {
        sound: 'default',
      },
    },
    image: {
      title: 'Image',
      body: 'notification',
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        },
      },
      ios: {
        sound: 'default',
        attachments: [
          {
            url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
          },
        ],
      },
    },
    quickActions: {
      title: 'Quick Actions',
      body: 'notification',
      id: 'quickAction',
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
        actions: [
          {
            title: 'Reply, Open & Cancel',
            pressAction: {
              id: 'first_action_reply',
            },
            // input: {
            //   choices: ['Yes', 'No', 'Maybe'],
            //   placeholder: 'Reply to Sarah...',
            // },
            input: {},
          },
          {
            title: 'Nothing',
            pressAction: {
              id: 'second_action_nothing',
            },
          },
        ],
      },
      ios: {
        sound: 'default',
        categoryId: 'quickActions',
      },
    },
    fullScreen: {
      title: 'Full-screen',
      body: 'notification',
      android: {
        channelId: 'fullscreen',
        // Recommended to set a category
        category: AndroidCategory.CALL,
        // Recommended to set importance to high
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
        sound: 'default',
        fullScreenAction: {
          id: 'default',
          // mainComponent: 'full-screen-main-component'
          launchActivity: 'com.example.CustomActivity',
        },
      },
      ios: {
        sound: 'default',
      },
    },
  };

  const notification = notifications.basic;

  const onDisplayNotificationPress = async () => {
    await notifee.deleteChannel('default');
    // Create a channel
    await notifee.createChannel({
      id: 'default',
      name: 'default',
      importance: AndroidImportance.DEFAULT,
      visibility: AndroidVisibility.PRIVATE,
      vibration: true,
      sound: 'default',
    });

    try {
      await notifee.displayNotification(notification);
    } catch (e) {
      console.error(e);
    }
  };

  const onSelfEmpowermentPressed = () => {
    if (isExerciseDue(dateOfTheFirstUsage ?? '')) {
      navigation.navigate(AppRoute.DRAWER, {
        screen: AppRoute.SELF_EMPOWERMENT_NAVIGATOR,
        params: {
          screen: AppRoute.FIRST_TYPE_EXCERCISE_CHECK,
        },
      });
      return;
    }
    navigation.navigate(AppRoute.DRAWER, {
      screen: AppRoute.SELF_EMPOWERMENT_NAVIGATOR,
    });
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.PALE_GREY} />
      <View style={styles.container}>
        <View style={styles.upperArea}>
          <Button
            title="Display Notification"
            onPress={() => onDisplayNotificationPress()}
          />
          <BigButton
            theme={ButtonTheme.INVERTED}
            text={'Vežbe za samoosnaživanje'}
            onPress={onSelfEmpowermentPressed}
          />
          <BigButton
            theme={ButtonTheme.INVERTED}
            style={styles.buttonSpacing}
            text={'Vežbe za: anksioznost, tugu, stres i nisko samopouzdanje'}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.SECOND_EXCERCISES,
              })
            }
          />
          <BigButton
            style={styles.buttonSpacing}
            text={'U krizi sam'}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.CRISIS,
              })
            }
          />
        </View>
        <View style={styles.bottomArea}>
          <Pressable
            style={styles.bottomButton}
            onPress={() =>
              navigation.navigate(AppRoute.DRAWER, {
                screen: AppRoute.ORGANIZATIONS_NAVIGATOR,
              })
            }>
            <CustomText>Baza podataka organizacija</CustomText>
          </Pressable>
        </View>
      </View>
    </>
  );
};
