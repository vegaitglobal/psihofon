import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#005751',
        borderRadius: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 71,
        padding: 10,

    } as ViewStyle,
    textContainer: {
        paddingLeft: 16,
        justifyContent: 'center'
    } as ViewStyle,
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 21,
        textTransform: 'uppercase'
    } as TextStyle,
    textContent: {
        color: 'white',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18
    } as TextStyle
});