import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICArrow} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <ICArrow />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
