import {useEffect} from 'react';
import notifee, {IOSAuthorizationStatus} from '@notifee/react-native';

export const usePermissionRequest = () => {
  const requestUserPermission = async () => {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
    }
  };

  useEffect(() => {
    (async () => {
      await requestUserPermission();
    })();
  }, []);
};
