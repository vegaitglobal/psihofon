import React, {useLayoutEffect} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Linking,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Reference} from '../../models/Reference';
import {RootState} from '../../reducers/rootReducer';
import Globe from '../../../assets/icons/Globe.svg';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Colors} from '../../styles/colors';
import {useHeader} from '../../hooks/useHeader';
import {ReferencesListScreenProps} from '../../navigation/DrawerNavigator';
import style from './style';
import {useFocusEffect} from '@react-navigation/native';

interface ReferenceNameProps {
  name: string;
}

const ReferenceName: React.FC<ReferenceNameProps> = ({name}) => {
  return (
    <View style={style.nameContainer}>
      <Text ellipsizeMode="tail" numberOfLines={7}>
        {name}
      </Text>
    </View>
  );
};

interface ReferenceLinkProps {
  websiteUrl: string;
}

const ReferenceLink: React.FC<ReferenceLinkProps> = ({websiteUrl}) => {
  const handlePress = () =>
    Linking.canOpenURL(websiteUrl)
      .then(canOpen => {
        if (canOpen) {
          Linking.openURL(websiteUrl);
        }
      })
      .catch(() => {
        Alert.alert('Ne mogu da otvorim link');
      });

  return (
    <TouchableOpacity onPress={handlePress} style={style.linkContainer}>
      <Globe />
    </TouchableOpacity>
  );
};

interface ReferenceContainerProps {
  name: string;
  websiteUrl: string;
}

const ReferenceContainer: React.FC<ReferenceContainerProps> = ({
  name,
  websiteUrl,
}) => {
  return (
    <View style={style.referenceContainer}>
      <ReferenceName name={name} />
      {!!websiteUrl?.length && <ReferenceLink websiteUrl={websiteUrl} />}
    </View>
  );
};

export const ReferencesListScreen: React.FC<ReferencesListScreenProps> = ({
  navigation,
}) => {
  const {references} = useSelector((state: RootState) => state.references);

  const renderItem = ({item}: ListRenderItemInfo<Reference>) => (
    <ReferenceContainer name={item.name} websiteUrl={item.websiteUrl} />
  );

  useHeader(navigation, true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.PALE_GREY,
      },
    });
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        navigation.goBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation]),
  );

  return (
    <SolidBackground backgroundColor={Colors.PALE_GREY}>
      <CustomText style={style.title}>Reference</CustomText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={references}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SolidBackground>
  );
};
