import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../constants/colors';

export default StyleSheet.create({
  organizationContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  } as ViewStyle,
  organizationLink: {
    backgroundColor: Colors.DEFAULT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  } as ViewStyle,
  organziationLabel: {
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    width: '60%',
    height: 40,
    paddingLeft: 9,
    borderRadius: 10,
    marginRight: 8,
  } as ViewStyle,
  city: {
    color: 'white',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  } as TextStyle,
  link: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    // textDecorationLine: 'underline'
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
