import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Doctor1, Star} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={Doctor1} style={styles.image} />
        <View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
      </View>
      <View style={styles.stars}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  profession: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
  },
  stars: {
    flexDirection: 'row',
  },
});
