import {Margins} from '../../constants/style';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
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
    marginLeft: Margins.HUGE,
  } as ViewStyle,
});
