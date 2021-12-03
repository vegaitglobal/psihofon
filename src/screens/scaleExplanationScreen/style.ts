import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';
import {verticalScale} from '../../utils/helpers';

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
  scaleItemContainer: {
    marginHorizontal: Margins.MEDIUM,
  } as ViewStyle,
  scaleSpacing: {
    marginVertical: verticalScale(18),
  } as ViewStyle,
  buttonSpacing: {
    marginTop: Margins.MEDIUM,
    marginBottom: Margins.SMALL,
  } as ViewStyle,
  skipButton: {
    marginBottom: Margins.SMALL,
  } as ViewStyle,
  headerArea: {
    marginVertical: 5,
  } as ViewStyle,
});
