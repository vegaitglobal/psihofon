import {Dimensions} from 'react-native';

export const HEIGHT = Dimensions.get('window').height;
export const isTinyDevice = HEIGHT < 660;
export const API_URL = 'https://psihofon.sitesstage.com/api/v1';
