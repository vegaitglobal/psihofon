import React from 'react'
import { View, Image } from 'react-native'
import { CustomText } from '../customText/CustomText';
import style from './style';

const timerIconPath = require('./../../../assets/icons/Timer.png')
interface RecommendationBoxProps {

}

export const RecommendationBox: React.FC<RecommendationBoxProps> = () => {
    return (
        <View style={style.container}>
            
            <Image source={timerIconPath}/>
            <View style={style.textContainer}>
                <CustomText style={style.title}>Učestalost rada</CustomText>
                <CustomText style={style.textContent}>1x dnevno, svaki dan, u trajanju od 7 dana</CustomText>
            </View>

        </View>
    )
}