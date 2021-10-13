import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../styles/colors';
import {Margins} from '../../styles/margins';

export default StyleSheet.create({
  explanationBox: {
    marginTop: 28,
  } as ViewStyle,
  lowerSectionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  } as ViewStyle,
  exerciseDescription: {
    fontSize: 14,
    paddingTop: 13,
    color: Colors.DARK_GRAY,
  } as TextStyle,
  exerciseDescriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.BLACKISH_TEXT,
  } as TextStyle,
  exerciseDescriptionContainer: {
    paddingHorizontal: 30,
  } as ViewStyle,
  preparationInformation: {
    fontSize: 14,
    color: Colors.WHITE,
  } as TextStyle,
  exerciseTitle: {
    paddingTop: 8,
    fontSize: 24,
    color: Colors.WHITE,
    fontWeight: '600',
  } as TextStyle,
  weekNumber: {
    fontSize: 14,
    color: Colors.GREEN_LIGHT,
  } as TextStyle,
});
