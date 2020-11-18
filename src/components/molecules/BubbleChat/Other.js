import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Doctor3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={Doctor3} style={styles.image} />
      <View>
        <View style={styles.bubble}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
  },
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  bubble: {
    backgroundColor: colors.primary,
    padding: 12,
    maxWidth: '80%',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 11,
    fontFamily: fonts.primary.normal,
  },
});
