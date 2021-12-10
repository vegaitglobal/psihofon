import {Colors} from '../../styles/colors';
import {BorderRadiuses} from '../../styles/borderRadiuses';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  placeholderText: {
    width: '88%',
  } as ViewStyle,
  barContainer: {
    height: 50,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: BorderRadiuses.XXLARGE,
    backgroundColor: Colors.VERY_DARK_GREEN,
  } as ViewStyle,
  textInput: {
    flex: 1,
    fontSize: 20,
    marginLeft: 20,
    lineHeight: 24,
    marginRight: 12,
    fontWeight: '600',
    color: Colors.WHITE,
  } as TextStyle,
  closeIcon: {
    width: 40,
    height: '100%',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  searchButton: {
    padding: 10,
    marginRight: -7,
  } as ViewStyle,
});
