import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {User, UserPhotoNull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: UserPhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      res.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={profile.photo} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
  },
});
