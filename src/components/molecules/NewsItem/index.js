import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {News1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <TouchableOpacity style={styles.main}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image style={styles.image} source={{uri: image}} />
    </TouchableOpacity>
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
