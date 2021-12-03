import notifee, {IOSAuthorizationStatus} from '@notifee/react-native';

export const RequestUserPermission = async (): Promise<boolean> => {
  const settings = await notifee.requestPermission();

  //! Everything is fine, notifications can run.
  if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
    return Promise.resolve(true);
  }

  return Promise.resolve(false);
};
