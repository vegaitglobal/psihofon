import React from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import styles from './style';

interface CustomButtonProps {
    text: string;
    onPress: () => void;
    isDark: boolean;
    style?: ViewStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, isDark, style }: CustomButtonProps) => {

    const viewStyle = [styles.container, isDark ? styles.darkBorder : styles.lightBorder];
    return (
        <View style={[...viewStyle, style]}>
            <Pressable onPress={onPress} style={styles.pressable}>
                <Text style={[styles.text, isDark ? styles.darkText : styles.lightText]}>{text}</Text>
            </Pressable>
        </View>
    );
}