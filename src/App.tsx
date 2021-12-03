import React from 'react';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {useSplashScreen} from './hooks/useSplashScreen';
import {RootNavigator} from './navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {persistor, store, useAppDispatch} from './store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RequestUserPermission} from './utils/RequestUserPermission';
import {useNotificationSetup} from './hooks/useNotificationSetup';
import {RootState} from './reducers/rootReducer';
import {setReminderNotificationSetup} from './reducers/persistedSettings';
// import {useNotificationListenerSetup} from './hooks/useNotificationListenerSetup'; //! Use this when you want to handle notifications.

enableScreens(false);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useAppDispatch();
  const {reminderNotificationSetupDone} = useSelector(
    (state: RootState) => state.persistedSettings,
  );

  useSplashScreen();
  // useNotificationListenerSetup(); //! Use this when you want to take actions based on notifications.
  useNotificationSetup.CreateAndroidChannel('scheduled');

  //! The PersistorGate will call this method after retrieving all the relevant state.
  const setupReminders = async () => {
    RequestUserPermission().then(notificationsAllowed => {
      if (notificationsAllowed) {
        if (!reminderNotificationSetupDone) {
          const onSuccess = () => {
            dispatch(setReminderNotificationSetup(true));
          };
          useNotificationSetup.SetupReminderNotification(
            onSuccess,
            'scheduled',
          );
        }
      }
    });
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={setupReminders}>
          <RootNavigator />
        </PersistGate>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
