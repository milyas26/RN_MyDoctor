import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Input = ({title}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginBottom: 6,
  },
});
