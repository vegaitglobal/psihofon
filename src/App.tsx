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
import {usePermissionRequest} from './hooks/usePermissionRequest';
import {useNotificationSetup} from './hooks/useNotificationSetup';
// import {useNotificationListenerSetup} from './hooks/useNotificationListenerSetup'; //! Use this when you want to handle notifications.
import {
  registerFirstAppOpen,
  shouldDisplayReminder,
} from './reducers/persistedSettings';

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
  const shouldShowReminder = useSelector(shouldDisplayReminder);
  
  useSplashScreen();
  usePermissionRequest();
  // useNotificationListenerSetup(); //! Use this when you want to take actions based on notifications.
  useNotificationSetup.CreateAndroidChannel('scheduled');
  useNotificationSetup.SetupReminderNotification(
    'scheduled',
    shouldShowReminder,
  );
  dispatch(registerFirstAppOpen());

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
