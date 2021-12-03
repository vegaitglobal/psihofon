import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomText} from '../../components/customText/CustomText';
import {RecommendationBox} from '../../components/recommendationBox/RecommendationBox';
import {useHeader} from '../../hooks/useHeader';
import {SecondTypeEcerciseScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {mentalStateExercisesById} from '../../reducers/mentalStatesReducer';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import Heart from '../../../assets/icons/Heart.svg';
import style from './style';

export interface SecondTypeEcerciseScreenParams {
  mentalStateId: number;
  exerciseId: number;
}

const UpperExerciseContent: React.FC<{title: string}> = ({title}) => {
  return (
    <View>
      <CustomText style={style.title}>{title}</CustomText>
    </View>
  );
};

const LowerExerciseContent: React.FC<{
  description: string;
  recommendation: string;
}> = ({description, recommendation}) => {
  return (
    <View style={style.lowerContentContainer}>
      <CustomText style={style.lowerContentText}>{description}</CustomText>
      {!!recommendation?.length && (
        <RecommendationBox
          title="Preporuka"
          content={recommendation}
          icon={<Heart />}
        />
      )}
    </View>
  );
};

export const SecondTypeEcerciseScreen: React.FC<SecondTypeEcerciseScreenProps> =
  ({navigation, route}) => {
    useHeader(navigation);
    const mentalStateSelector = useSelector(mentalStateExercisesById);

    const item = mentalStateSelector(
      route.params.mentalStateId,
      route.params.exerciseId,
    );

    return (
      <GeneralExerciseScreen
        upperContent={<UpperExerciseContent title={item.title} />}
        lowerContent={
          <LowerExerciseContent
            description={item.description}
            recommendation={item.recommendation}
          />
        }
      />
    );
  };
