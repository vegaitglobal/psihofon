import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 40,
  } as ViewStyle,
  pressable: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  darkBorder: {
    borderColor: Colors.DARK_GREEN,
  } as ViewStyle,
  lightBorder: {
    borderColor: Colors.WHITE,
  } as ViewStyle,
  text: {
    fontSize: 12,
    fontWeight: '600',
  } as TextStyle,
  darkText: {
    color: Colors.DARK_GREEN,
  } as TextStyle,
  lightText: {
    color: Colors.WHITE,
  } as TextStyle,
});
