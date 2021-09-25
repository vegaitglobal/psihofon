import {Colors} from '../../../constants/colors';
import {BorderRadiuses} from '../../../constants/style';
import {isTinyDevice} from '../../../constants/constants';
import {moderateVerticalScale} from './../../../utils/helpers';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT,
    borderRadius: BorderRadiuses.LARGE,
    height: isTinyDevice ? moderateVerticalScale(80, 0) : 80,
  } as ViewStyle,
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
  } as TextStyle,
  textContainer: {
    width: '70%',
  } as ViewStyle,
});
