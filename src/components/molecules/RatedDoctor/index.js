import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Doctor1, Star} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.container}>
        <Image source={avatar} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      </View>
      <View style={styles.stars}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </TouchableOpacity>
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
