import React from 'react';
import {View} from 'react-native';
import {ComplexBackground} from '../../components/complexBackground/ComplexBackground';
import {CustomText} from '../../components/customText/CustomText';
import {RecommendationBox} from '../../components/recommendationBox/RecommendationBox';
import {useHeader} from '../../hooks/useHeader';
import {FirstTypeExerciseFirstWeekProps} from '../../navigation/FirstExcercisesNavigator';
import {Colors} from '../../styles/colors';
import TimerIcon from '../../../assets/icons/Timer.svg';
import {BackToBeginningButton} from '../../components/backToBeggingingButtion/BackToBegginingButton';
import {ExplanationBox} from '../../components/explanationBox/ExplanationBox';

export const FirstTypeExerciseFirstWeekScreen: React.FC<FirstTypeExerciseFirstWeekProps> =
  ({navigation}) => {
    useHeader(navigation, false);

    const GeneralInfoWithWeekIndicator = () => {
      return (
        <View style={{}}>
          <CustomText style={{fontSize: 14, color: Colors.GREEN_LIGHT}}>
            1123123
          </CustomText>
          <CustomText
            style={{
              paddingTop: 8,
              fontSize: 24,
              color: Colors.WHITE,
              fontWeight: '600',
            }}>
            sdfsdfsdfgdg
          </CustomText>
          <CustomText style={{fontSize: 14, color: Colors.WHITE}}>
            123Pre nego što započnete sa programom, odvojte jednu svesku ili
            beležnicu u koju ćete beležiti sve što bude potrebno dok radite na
            sebi. Važno je da zadatke radite tačno prema uputstvu da bi oni
            imali efekta. Za sve zadatke koje se nalaze u ovom program postoje
            naučni dokazi da doprinose poboljšanju Vašeg mentalnog zdravlja
            ukoliko se rade prema uputstvu. Nemojte preskakati korake u radu i
            radite ih po utvrđenom redosledu123.
          </CustomText>
        </View>
      );
    };

    const ExerciseDescription = () => {
      return (
        <View style={{paddingHorizontal: 30}}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: Colors.BLACKISH_TEXT,
            }}>
            Onsaousa adsasd
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              paddingTop: 13,
              color: Colors.DARK_GRAY,
            }}>
            aafksasdjasdaskdfasl; asdl;as;lkasdkasd askad;as;l ndaksdkl
            jasdljaskld akkladklasj klas background: #0A0909;background: {'\n'}
            {'\n'}#0A0909;background: #0A0909;background: #0A0909; background:
            #0A0909;background: #0A0909;background: #0A0909;background: #0A0909;
          </CustomText>
        </View>
      );
    };

    return (
      <ComplexBackground
        upperContent={<GeneralInfoWithWeekIndicator />}
        lowerContent={
          <View>
            <ExerciseDescription />
            <ExplanationBox>
              <CustomText>12342qfsaddsadsaf</CustomText>
            </ExplanationBox>
            <RecommendationBox
              icon={<TimerIcon />}
              title={'asdadfad'}
              content={'fdssdf'}
            />
            <BackToBeginningButton
              onPress={() => console.log('Here we should scroll to top')}
            />
          </View>
        }
      />
    );
  };