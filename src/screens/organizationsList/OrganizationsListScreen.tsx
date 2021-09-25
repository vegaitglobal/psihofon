import React from 'react';
import {
  Alert,
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import organizations from '../../../assets/data/organizations.json';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Colors} from '../../constants/colors';
import {useLightHeader} from '../../hooks/useLightHeader';
import {OrganizationsListScreenProps} from '../../navigation/DrawerNavigator';
import style from './style';

interface OrganizationLabelProps {
  name: string;
}

const OrganizationLabel: React.FC<OrganizationLabelProps> = ({name}) => {
  return (
    <View style={style.organziationLabel}>
      <Text>{name}</Text>
    </View>
  );
};

interface OrganizationLinkProps {
  city: string;
  websiteUrl: string;
  linkFontSize?: number;
}

const OrganizationLink: React.FC<OrganizationLinkProps> = ({
  websiteUrl,
  city,
}) => {
  const handlePress = () =>
    Linking.canOpenURL(websiteUrl).then(canOpen => {
      canOpen && Linking.openURL(websiteUrl);
    });

  return websiteUrl?.length ? (
    <TouchableOpacity onPress={handlePress} style={style.organizationLink}>
      <Text style={style.city}>{city}</Text>
      <Text style={style.link}>Vebsajt</Text>
    </TouchableOpacity>
  ) : (
    <View style={style.organizationLink}>
      <Text style={style.city}>{city}</Text>
    </View>
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
      <OrganizationLabel name={name} />
      <OrganizationLink city={city} websiteUrl={websiteUrl} />
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

    useLightHeader(navigation);

    return (
      <SolidBackground backgroundColor={Colors.PALE_GRAY}>
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
