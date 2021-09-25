import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  labelText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    color: Colors.WHITE,
  } as TextStyle,
  labelSpacing: {
    marginLeft: 36,
  } as ViewStyle,
  descriptionText: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.WHITE,
  } as TextStyle,
  scaleContainer: {
    marginHorizontal: Margins.MEDIUM,
  } as ViewStyle,
  scaleSpacing: {
    marginVertical: 18,
  } as ViewStyle,
  buttonSpacing: {
    marginTop: Margins.MEDIUM,
  } as ViewStyle,
});
