import {StyleSheet, ViewStyle} from 'react-native';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  } as ViewStyle,
  list: {marginTop: Margins.LARGE} as ViewStyle,
  separator: {marginVertical: Margins.SMALL} as ViewStyle,
  textButton: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: Margins.SMALL,
    textAlign: 'center',
    textDecorationLine: 'underline',
  } as ViewStyle,
  bottomButton: {marginBottom: Margins.XLARGE},
});
