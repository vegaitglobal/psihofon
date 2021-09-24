import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../constants/Colors';

const SPLITTING_RADIUS = 70;

export default StyleSheet.create({
  root: {
    backgroundColor: Colors.SECONDARY,
    flex: 1,
  } as ViewStyle,
  upperContent: {
    backgroundColor: Colors.PRIMARY,
    borderBottomEndRadius: SPLITTING_RADIUS,
  } as ViewStyle,
  upperContentContainer: {
    width: '100%',
  } as ViewStyle,
  lowerContent: {
    backgroundColor: Colors.SECONDARY,
    borderTopStartRadius: SPLITTING_RADIUS,
    width: '100%',
    height: '100%',
  } as ViewStyle,
  lowerContentContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  } as ViewStyle,
});
