import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Paddings} from '../../styles/paddings';

const SPLITTING_RADIUS = 60;

export default StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    // height: Dimensions.get('screen').height,
  } as ViewStyle,
  upperContent: {
    paddingTop: Paddings.MEDIUM,
    paddingBottom: Paddings.XLARGE,
    paddingHorizontal: Paddings.MEDIUM,
    backgroundColor: Colors.DARK_GREEN,
    borderBottomEndRadius: SPLITTING_RADIUS,
  } as ViewStyle,
  upperContentContainer: {
    width: '100%',
  } as ViewStyle,
  lowerContent: {
    paddingTop: Paddings.LARGE,
    paddingBottom: Paddings.MEDIUM,
    paddingHorizontal: Paddings.MEDIUM,
    backgroundColor: Colors.WHITE,
    borderTopStartRadius: SPLITTING_RADIUS,
    width: '100%',
    height: '100%',
  } as ViewStyle,
  lowerContentContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_GREEN,
  } as ViewStyle,
});
