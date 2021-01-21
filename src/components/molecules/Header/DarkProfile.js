import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const darkProfile = ({onPress, title, type, photo, desc}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.main}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.profesi}> {desc}</Text>
      </View>
      <Image source={photo} style={styles.image} />
    </View>
  );
};

export default darkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  main: {
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  profesi: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.subTitle,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
