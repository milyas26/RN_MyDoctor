import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, isCenter, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, isCenter)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (size, isCenter) => ({
    fontSize: size,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: isCenter ? 'center' : null,
  }),
});
