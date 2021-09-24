import React from 'react'
import { Text, View, Image } from 'react-native'
import style from './style';

const timerIconPath = require('./../../../assets/icons/Timer.png')
interface RecommendationBoxProps {

}

export const RecommendationBox: React.FC<RecommendationBoxProps> = () => {
    return (
        <View style={style.container}>
            
            <Image source={timerIconPath}/>
            <View style={style.textContainer}>
                <Text style={style.title}>Ucestalost rada</Text>
                <Text style={style.textContent}>1x dnevno, svaki dan, u trajanju od 7 dana</Text>
            </View>

        </View>
    )
}