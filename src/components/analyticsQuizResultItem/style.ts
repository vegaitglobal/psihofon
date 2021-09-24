import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  bold: {
    fontWeight: 'bold',
  },
});
