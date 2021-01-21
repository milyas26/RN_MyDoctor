import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({title, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.primary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border, disable)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border, disable) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: !disable ? colors.text.primary : colors.text.secondary,
  }),
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginBottom: 6,
  },
});
