import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SendDark, SendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)} onPress={onPress}>
        <SendDark />
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <SendLight />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.blue,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 8,
    paddingBottom: 8,
    borderRadius: 10,
  }),
});
