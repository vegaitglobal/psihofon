import React from 'react';
import {Text, View} from 'react-native';
import {useLightHeader} from '../../hooks/useLightHeader';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import style from './style';

const UpperExerciseContent = () => {
  return (
    <View>
      <Text style={style.title}>Dišite duboko</Text>
    </View>
  );
};

const LowerExerciseContent = () => {
  return (
    <View style={style.lowerContentContainer}>
      <Text style={style.lowerContentText}>
        Svakog dana zapišite tri dobre stvari koje su Vam se desile tog dana,
        kao i objašnjenje zašto je to dobro. To Usmerite svu svoju pažnju na
        disanje. Dišite duboko i sporije.
        {'\n\n'}
        Stavite ruku na svoj stomak, udahnite kroz nos što dublje možete dok
        brojite do 10.
        {'\n\n'}
        Zadržite disanje 5 sekundi.
        {'\n\n'}
        Potom, izdišite vazduh polako, kroz nos, brojeći do 10. Osetite kako vam
        se pluća pune vazduhom i kako vam se stomak podiže.
        {'\n\n'}
        Ponovite ovaj postupak više puta. Ponovite ga sve dok ne osetite da vam
        se unutrašnjost tela smiruje. Kontrola disanja je veoma važna u
        smirivanju anksioznog napada. Dajte događajima naslov. Napišite šta se
        tačno desilo, što detaljnije, šta ste Vi rekli, šta su rekli drugi
        učesnici. Navedite kako ste se osećali zbog događaja kada se dogodio i
        kako ste se osećali kasnije i sada. Razmotrite šta je izazvao ovaj
        događaj i kako je došlo do toga da bude izabran.
      </Text>
    </View>
  );
};

export const BreatheExerciseScreen = ({navigation}) => {
  useLightHeader(navigation);

  return (
    <GeneralExerciseScreen
      upperContent={<UpperExerciseContent />}
      lowerContent={<LowerExerciseContent />}
    />
  );
};
