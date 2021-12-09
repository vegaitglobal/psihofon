import {Colors} from '../../styles/colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
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
