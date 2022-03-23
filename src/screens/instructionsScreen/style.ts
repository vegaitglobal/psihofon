import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Paddings} from '../../styles/paddings';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: Paddings.MEDIUM,
    backgroundColor: Colors.PALE_GREY,
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  instructionTitle: {
    paddingTop: 8,
    fontSize: 24,
    color: Colors.BLACK,
    fontWeight: '600',
  } as TextStyle,
  introduction: {
    paddingTop: 20,
    fontSize: 14,
    color: Colors.BLACK,
  } as TextStyle,
  description: {
    paddingTop: 20,
    fontSize: 14,
    color: Colors.BLACK,
  } as TextStyle,
  homePageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  } as ViewStyle,
});
