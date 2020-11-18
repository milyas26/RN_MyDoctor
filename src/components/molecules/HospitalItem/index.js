import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Hospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HospitalItem = () => {
  return (
    <View style={styles.container}>
      <Image source={Hospital1} style={styles.image} />
      <View>
        <Text style={styles.title}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default HospitalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    width: 200,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
