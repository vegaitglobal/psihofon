import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './navigation/RootNavigator';
import {persistor, store} from './store/store';
import notifee, {
  EventType,
  IOSAuthorizationStatus,
} from '@notifee/react-native';

enableScreens(false);

const App = () => {
  const categories: IOSNotificationCategory[] = [
    {
      id: 'quickActions',
      actions: [
        {
          id: 'first_action_reply',
          title: 'Reply, Open & Cancel',
          input: true,
        },
        {
          id: 'second_action_nothing',
          title: 'Nothing',
        },
      ],
    },
  ];

  useEffect(() => {
    SplashScreen.hide();
  });
  const requestUserPermission = async () => {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
    }
  };
  useEffect(() => {
    notifee.setNotificationCategories(categories);
    return notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      const pressActionLabel = pressAction
        ? `, press action: ${pressAction?.id}`
        : '';
      console.log(
        `[onForegroundEvent] notification id: ${notification?.id},  event type: ${EventType[type]}${pressActionLabel}`,
      );

      switch (type) {
        case EventType.DISMISSED:
          console.log(
            '[onForegroundEvent] User dismissed notification',
            notification,
          );
          break;
        case EventType.PRESS:
          console.log(
            '[onForegroundEvent] User pressed notification',
            notification,
          );
          break;
        case EventType.ACTION_PRESS:
          console.log(
            '[onForegroundEvent] User pressed an action',
            notification,
            detail.pressAction,
          );

          if (detail.pressAction?.id === 'first_action_reply') {
            // perform any server calls here and cancel notification
            if (notification?.id) {
              await notifee.cancelDisplayedNotification(notification.id);
            }
          }
          break;
      }
    });
  }, [categories]);

  useEffect(() => {
    (async () => {
      await requestUserPermission();
    })();
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
