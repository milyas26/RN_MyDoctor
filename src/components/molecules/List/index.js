import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICEditProfile,
  ICHelp,
  ICLanguage,
  ICNext,
  ICRate,
} from '../../../assets';

import {colors, fonts} from '../../../utils';

const List = ({isUnread, pic, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <ICEditProfile />;
    }
    if (icon === 'language') {
      return <ICLanguage />;
    }
    if (icon === 'rate') {
      return <ICRate />;
    }
    if (icon === 'help') {
      return <ICHelp />;
    }

    return <ICEditProfile />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image source={pic} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.nama}>{name}</Text>
        <Text style={styles.chat(isUnread)}>{desc} </Text>
      </View>
      {type === 'next' && <ICNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 12,
  },
  nama: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  chat: (isUnread) => ({
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: isUnread ? colors.text.primary : colors.text.secondary,
  }),
});
