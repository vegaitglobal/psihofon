import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  list: {marginVertical: Margins.LARGE},
  separator: {
    height: 0.5,
    backgroundColor: Colors.WHITE,
  },
  centerContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
