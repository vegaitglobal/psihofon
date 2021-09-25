import React from 'react';
import {FlatList, Linking, Text, TouchableOpacity, View} from 'react-native';
import organizations from '../../../assets/data/organizations.json';
import Globe from '../../../assets/icons/Globe.svg';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Colors} from '../../styles/colors';
import {useHeader} from '../../hooks/useHeader';
import {OrganizationsListScreenProps} from '../../navigation/DrawerNavigator';
import style from './style';

interface OrganizationNameProps {
  name: string;
}

const OrganizationName: React.FC<OrganizationNameProps> = ({name}) => {
  return (
    <View style={style.nameContainer}>
      <Text>{name}</Text>
    </View>
  );
};

interface OrganizationCityProps {
  city: string;
}

const OrganizationCity: React.FC<OrganizationCityProps> = ({city}) => {
  return (
    <View style={style.cityContainer}>
      <Text style={style.city}>{city}</Text>
    </View>
  );
};

interface OrganizationLinkProps {
  websiteUrl: string;
}

const OrganizationLink: React.FC<OrganizationLinkProps> = ({websiteUrl}) => {
  const handlePress = () =>
    Linking.canOpenURL(websiteUrl).then(canOpen => {
      canOpen && Linking.openURL(websiteUrl);
    });

  return (
    <TouchableOpacity onPress={handlePress} style={style.linkContainer}>
      <Globe />
    </TouchableOpacity>
  );
};

interface OrganizationContainerProps {
  name: string;
  city: string;
  websiteUrl: string;
}

const OrganizationContainer: React.FC<OrganizationContainerProps> = ({
  name,
  websiteUrl,
  city,
}) => {
  return (
    <View style={style.organizationContainer}>
      <OrganizationName name={name} />
      <OrganizationCity city={city} />
      {!!websiteUrl?.length && <OrganizationLink websiteUrl={websiteUrl} />}
    </View>
  );
};

export const OrganizationsListScreen: React.FC<OrganizationsListScreenProps> =
  ({navigation}) => {
    const renderItem = ({item}) => (
      <OrganizationContainer
        name={item.name}
        city={item.city}
        websiteUrl={item.websiteUrl}
      />
    );

    useHeader(navigation, true);

    return (
      <SolidBackground backgroundColor={Colors.PALE_GREY}>
        <CustomText style={style.title}>Baza podataka organizacija</CustomText>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={organizations}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </SolidBackground>
    );
  };
