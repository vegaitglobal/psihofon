import {Colors} from '../../styles/colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  lowerContentContainer: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'space-between',
    height: '100%',
  } as ViewStyle,
  title: {
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 36,
    color: Colors.WHITE,
  } as TextStyle,
  lowerContentText: {
    fontWeight: '400',
    paddingHorizontal: 30,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.DARK_GRAY,
    marginBottom: 0,
  } as TextStyle,
});
