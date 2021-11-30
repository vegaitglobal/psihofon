import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export const useSplashScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
};
