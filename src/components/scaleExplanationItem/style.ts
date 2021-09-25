import {Margins} from '../../constants/style';
import {Colors} from '../../constants/colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
