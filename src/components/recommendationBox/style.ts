import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#005751',
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    padding: 10,
  } as ViewStyle,
  textContainer: {
    paddingHorizontal: 16,
    width: '95%',
    justifyContent: 'center',
  } as ViewStyle,
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    textTransform: 'uppercase',
  } as TextStyle,
  textContent: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    marginRight: 10,
    width: '95%',
  } as TextStyle,
});
