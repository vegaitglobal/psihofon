import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  list: {marginVertical: Margins.XXLARGE},
  separator: {
    height: 0.5,
    backgroundColor: Colors.WHITE,
  } as ViewStyle,
  centerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  } as ViewStyle,
});
