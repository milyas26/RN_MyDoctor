import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {User} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={User} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
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
});