import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';
import {Paddings} from '../../styles/paddings';
import {verticalScale} from '../../utils/helpers';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: Paddings.MEDIUM,
    backgroundColor: Colors.PALE_GREY,
  } as ViewStyle,
  buttonSpacing: {
    marginTop: Margins.SMALL,
  } as ViewStyle,
  upperArea: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  bottomArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  } as ViewStyle,
  bottomButton: {
    padding: 20,
    bottom: verticalScale(90),
  } as ViewStyle,
});
