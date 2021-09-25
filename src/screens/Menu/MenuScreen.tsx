import React from 'react';
import {Button, View} from 'react-native';
import {ComplexBackground} from '../../components/ComplexBackground/ComplexBackground';
import {CustomText} from '../../components/customText/CustomText';
import {MenuScreenProps} from '../../navigation/RootNavigator';
import {changeLogInState} from '../../reducers/settingsReducer';
import {useAppDispatch} from '../../store/store';
import styles from './style';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

export const MenuScreen: React.FC<MenuScreenProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <ComplexBackground
        //TODO These are just placeholders
        upperContent={
          <CustomText>
            123312312312312312312esaffr1423edasf123sfcf32sffsdfsdf
            sffsdfdssdfsdfsd f sdffsdf sf
            fasdasdadasasdasdasdasdasdasdasdasdasdasdasdasdasdasda
            sdasasdasdassadasdasdadasdasagsdfgfsgsfasfsdgfsdf a
          </CustomText>
        }
        lowerContent={
          <>
            <CustomText>Is user logged in: Fake bool: true</CustomText>
            <Button
              onPress={() => {
                PushNotification.localNotification({
                  channelId: '123123123123123123123123123',
                });
                dispatch(changeLogInState(true));
              }}
              title="Change user state"
            />
          </>
        }
      />
    </View>
  );
};
