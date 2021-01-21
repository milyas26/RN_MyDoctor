import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICRemovePhoto, User} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, photo, isEdit, onPress}) => {
  return (
    <View style={styles.container}>
      {!isEdit && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}

      {isEdit && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isEdit && (
            <TouchableOpacity style={styles.removePhoto}>
              <ICRemovePhoto />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}

      {name && (
        <View style={styles.user}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 530 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
