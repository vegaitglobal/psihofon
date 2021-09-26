import {StyleSheet, ViewStyle} from 'react-native';
import {Margins} from '../../styles/margins';
import {verticalScale} from '../../utils/helpers';

export default StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 2,
  } as ViewStyle,
  list: {marginTop: verticalScale(Margins.LARGE)} as ViewStyle,
  separator: {marginBottom: verticalScale(Margins.SMALL)} as ViewStyle,
  textButton: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: Margins.SMALL,
    textAlign: 'center',
    textDecorationLine: 'underline',
  } as ViewStyle,
  bottomButton: {marginBottom: verticalScale(40)},
  lowerArea: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
});
