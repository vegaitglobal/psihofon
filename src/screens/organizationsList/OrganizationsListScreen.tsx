import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  Text,
  TextLayoutEventData,
  TextStyle,
  View,
} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import style from './style';
import {Colors} from '../../constants/colors';

interface AdjustableFontTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const AdjustableFontText: React.FC<AdjustableFontTextProps> = ({
  children,
  style,
}) => {
  const [fontSize, setFontSize] = useState(style?.fontSize | 12);

  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const {lines} = e.nativeEvent;

    if (lines.length > 1) {
      setFontSize(prev => prev - 1);
    }
  };

  return (
    <Text onTextLayout={onTextLayout} style={{...style, fontSize}}>
      {children}
    </Text>
  );
};

interface OrganizationLabelProps {
  label: string;
}

const OrganizationLabel: React.FC<OrganizationLabelProps> = ({label}) => {
  return (
    <View style={style.organziationLabel}>
      <Text>{label}</Text>
    </View>
  );
};

interface OrganizationLinkProps {
  city: string;
  link: string;
  linkFontSize?: number;
}

const OrganizationLink: React.FC<OrganizationLinkProps> = ({link, city}) => {
  return (
    <View style={style.organizationLink}>
      <Text style={style.city}>{city}</Text>
      <AdjustableFontText style={style.link}>{link}</AdjustableFontText>
    </View>
  );
};

interface OrganizationContainerProps {
  label: string;
  city: string;
  link: string;
}

const OrganizationContainer: React.FC<OrganizationContainerProps> = ({
  label,
  link,
  city,
}) => {
  return (
    <View style={style.organizationContainer}>
      <OrganizationLabel label={label} />
      <OrganizationLink city={city} link={link} />
    </View>
  );
};

const organizations = [
  {
    label: 'Psihološki centar ProActiva',
    city: 'Subotica',
    link: 'www.proaktiva.rs',
  },
  {
    label: 'Psihološko savetovalište za mlade - Novosadski humanitarni centar',
    city: 'Novi Sad',
    link: 'www.savetovaliste.nshc.org.rs',
  },
  {label: 'Sos ženski centar', city: 'Novi Sad', link: 'www.sosns.rs'},
  {
    label: 'Psihološko savetovalište za mlade – Infopolis (EDIT Centar)',
    city: 'Novi Sad',
    link: 'www.infopolis.rs',
  },
  {
    label: 'Udruženje Crvena Linija',
    city: 'Novi Sad',
    link: 'www.crvenalinija.org',
  },
  {
    label: 'Centar Srce',
    city: 'Novi Sad',
    link: 'www.centarsrce.org',
  },
];

export const OrganizationsListScreen: React.FC<{}> = () => {
  return (
    <SolidBackground
      backgroundColor={Colors.PALE_GRAY}
      onPressMenu={() => Alert.alert('Hi there')}>
      <CustomText style={style.title}>Baza podataka organizacija</CustomText>
      {organizations.map(org => (
        <OrganizationContainer
          label={org.label}
          city={org.city}
          link={org.link}
        />
      ))}
    </SolidBackground>
  );
};
