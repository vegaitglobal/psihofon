import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  } as ViewStyle,
  buttonContainer: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 50,
    padding: 10,
  } as ViewStyle,
  buttonText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  } as TextStyle,
});
