import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({title, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 14,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
