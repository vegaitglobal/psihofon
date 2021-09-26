import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  lowerContentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
    height: '100%',
  } as ViewStyle,
  title: {
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 36,
    textTransform: 'uppercase',
    color: Colors.WHITE,
  } as TextStyle,
  lowerContentText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.DARK_GRAY,
    marginBottom: 0,
  } as TextStyle,
});
