import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      height: 40,
    } as ViewStyle,
    pressable: {
      flex: 1,
      justifyContent: "center",
      width: '100%',   
      alignItems: "center",
    },
    darkBorder: {
        borderColor: '#005751'
    } as ViewStyle,
    lightBorder: {
        borderColor: '#FFFFFF'
    } as ViewStyle,
    text: {
      fontSize: 12,
      fontWeight: "600",
    } as TextStyle,
    darkText: {
        color: '#005751'
    } as TextStyle, 
    lightText: {
        color: "#FFFFFF"
    } as TextStyle,
  });
  