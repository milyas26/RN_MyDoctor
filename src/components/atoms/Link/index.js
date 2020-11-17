import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, isCenter}) => {
  return (
    <View>
      <Text style={styles.title(size, isCenter)}>{title}</Text>
    </View>
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
