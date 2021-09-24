import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Paddings} from '../../styles/paddings';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREEN,
    paddingHorizontal: Paddings.MEDIUM,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
});
