import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DokterAnak, DokterObat, DokterUmum, Psikiater} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    if (category === 'Dokter Umum') {
      return <DokterUmum />;
    }
    if (category === 'Dokter Anak') {
      return <DokterAnak />;
    }
    if (category === 'Dokter Obat') {
      return <DokterObat />;
    }
    if (category === 'Psikiater') {
      return <Psikiater />;
    }
    return <DokterObat />;
  };
  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.text}>Saya Butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 130,
    backgroundColor: colors.cardLight,
    marginRight: 10,
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 28,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
