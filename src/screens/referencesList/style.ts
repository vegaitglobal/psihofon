import {Colors} from '../../styles/colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  referenceContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  } as ViewStyle,
  linkContainer: {
    backgroundColor: Colors.DARK_GREEN,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 8,
  } as ViewStyle,
  nameContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    width: '80%',
    height: 130,
    paddingHorizontal: 9,
    borderRadius: 10,
    marginRight: 8,
  } as ViewStyle,
  link: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  } as TextStyle,
  title: {
    color: '#706F6F',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 16,
  } as TextStyle,
});
