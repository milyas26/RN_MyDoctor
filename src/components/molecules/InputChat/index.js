import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi..."
        value={value}
        onChangeText={onChangeText}
      />
      <Button type="btn-icon-send" onPress={onPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  main: {padding: 16, flexDirection: 'row'},
  input: {
    height: 45,
    padding: 12,
    marginRight: 10,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    backgroundColor: colors.disable,
    borderColor: colors.border,
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    color: colors.text.primary,
  },
});
