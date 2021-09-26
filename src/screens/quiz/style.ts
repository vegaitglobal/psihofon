import {Dimensions, StyleSheet, ViewStyle} from 'react-native';
import {Paddings} from '../../styles/paddings';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width - 2 * Paddings.MEDIUM,
    paddingVertical: Paddings.MEDIUM,
  } as ViewStyle,
  pagerView: {
    flex: 1,
  } as ViewStyle,
  item: {
    flex: 1,
  } as ViewStyle,
  content: {
    flex: 1,
  } as ViewStyle,
  circle: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    height: 7,
    borderRadius: 20,
    marginHorizontal: 15,
  } as ViewStyle,
  dots: {
    transform: [{translateX: -15}],
    marginTop: 30,
  } as ViewStyle,
  question: {
    marginTop: 20,
  } as ViewStyle,
});
