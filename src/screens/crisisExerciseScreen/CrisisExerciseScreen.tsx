import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomText} from '../../components/customText/CustomText';
import {useHeader} from '../../hooks/useHeader';
import {crisisExerciseById} from '../../reducers/crisisExcercisesReducer';
import {GeneralExerciseScreen} from '../generalExerciseScreen/GeneralExerciseScreen';
import style from './style';
import {CrisisExerciseScreenProps} from '../../navigation/CrisisNavigator';

export interface CrisisExerciseScreenParams {
  id: number;
}

const UpperExerciseContent: React.FC<{title: string}> = ({title}) => {
  return (
    <View>
      <CustomText style={style.title}>{title}</CustomText>
    </View>
  );
};

const LowerExerciseContent: React.FC<{description: string}> = ({
  description,
}) => {
  return (
    <View style={style.lowerContentContainer}>
      <CustomText style={style.lowerContentText}>{description}</CustomText>
    </View>
  );
};

export const CrisisExerciseScreen: React.FC<CrisisExerciseScreenProps> = ({
  navigation,
  route,
}) => {
  useHeader(navigation);
  const crisisExcerciseSelector = useSelector(crisisExerciseById);

  const item = crisisExcerciseSelector(route.params.id);

  return (
    <GeneralExerciseScreen
      upperContent={<UpperExerciseContent title={item.title} />}
      lowerContent={<LowerExerciseContent description={item.description} />}
    />
  );
};
