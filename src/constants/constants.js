import {Dimensions} from 'react-native';

export const HEIGHT = Dimensions.get('window').height;
export const isTinyDevice = HEIGHT < 660;
export const MAX_NOTIFICATION_REPEAT_COUNT = 3; //! Repeats the remind notification three times and after that the notification won't be triggered.
