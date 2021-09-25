import {Colors} from '../../styles/colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  labelText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    color: Colors.WHITE,
  } as TextStyle,
  labelSpacing: {
    width: '70%',
    marginLeft: Margins.MIDLARGE + 6,
  } as ViewStyle,
});
