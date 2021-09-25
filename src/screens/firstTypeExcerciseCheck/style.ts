import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.PALE_GREY,
    marginBottom: Margins.LARGE,
  },
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
  bottomButton: {marginBottom: Margins.XLARGE} as ViewStyle,
  spacer: {height: 10} as ViewStyle,
});
