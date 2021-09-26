import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: Colors.PALE_GREY,
    paddingHorizontal: 30,
    paddingVertical: 20,
  } as ViewStyle,
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 18,
    color: Colors.DARK_GRAY,
  } as TextStyle,
  content: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.DARK_GRAY,
  } as TextStyle,
});
