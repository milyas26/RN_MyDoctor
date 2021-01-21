import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile.js';

const Header = ({title, onPress, type, photo, desc}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile
        onPress={onPress}
        title={title}
        type={type}
        photo={photo}
        desc={desc}
      />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    borderBottomLeftRadius: type === 'dark' ? 20 : null,
    borderBottomRightRadius: type === 'dark' ? 20 : null,
  }),
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
