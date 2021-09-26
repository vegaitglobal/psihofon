import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {BorderRadiuses} from '../../styles/borderRadiuses';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
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
    marginRight: 20,
  } as ViewStyle,
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  searchButton: {
    marginRight: 1,
  } as ViewStyle,
});
