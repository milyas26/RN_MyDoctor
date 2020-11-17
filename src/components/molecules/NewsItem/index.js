import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {News1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image style={styles.image} source={News1} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  title: {
    maxWidth: '75%',
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
