import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CoverHospital, Hospital1, Hospital2, Hospital3} from '../../assets';
import {HospitalItem} from '../../components';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={CoverHospital} style={styles.imageBackground}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View>
          <HospitalItem
            type="Rumah Sakit Umum"
            name="Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera 20"
            pic={Hospital1}
          />
          <HospitalItem
            type="Rumah Sakit Anak"
            name="Happy Family & Kids"
            address="Jln. Surya Sejahtera 20"
            pic={Hospital2}
          />
          <HospitalItem
            type="Rumah Sakit Jiwa"
            name="Tingkatan Paling Atas"
            address="Jln. Surya Sejahtera 20"
            pic={Hospital3}
          />
          <HospitalItem
            type="Rumah Sakit Umum"
            name="Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera 20"
            pic={CoverHospital}
          />
          <HospitalItem
            type="Rumah Sakit Umum"
            name="Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera 20"
            pic={Hospital1}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  imageBackground: {
    height: 240,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 6,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  container: {
    backgroundColor: colors.text.primary,
    flex: 1,
  },
  main: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
  },
});
