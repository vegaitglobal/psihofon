import {Dimensions} from 'react-native';

export const HEIGHT = Dimensions.get('window').height;
export const isTinyDevice = HEIGHT < 660;
