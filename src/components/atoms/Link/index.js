import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: isCenter ? 'center' : null,
  }),
});
