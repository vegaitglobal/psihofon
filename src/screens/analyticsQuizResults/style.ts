import {verticalScale} from './../../utils/helpers';
import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';
import {Paddings} from '../../styles/paddings';

export default StyleSheet.create({
  list: {
    marginBottom: verticalScale(Margins.LARGE),
    marginTop: verticalScale(Margins.MIDLARGE),
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: Colors.WHITE,
  } as ViewStyle,
  upperArea: {
    flex: 6,
    justifyContent: 'flex-end',
    paddingHorizontal: Paddings.MEDIUM,
  } as ViewStyle,
  lowerArea: {
    flex: 4,
  } as ViewStyle,
});
