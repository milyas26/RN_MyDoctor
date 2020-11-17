import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserPhotoNull, ICAddPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profileWrapper}>
          <View style={styles.avatarWrapper}>
            <Image source={UserPhotoNull} style={styles.avatar} />
            <ICAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button>Upload and Continue</Button>
          <Gap height={30} />
          <Link title="Skip for this" isCenter size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profileWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 125 / 2,
    borderWidth: 2,
    borderColor: colors.border,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  addPhoto: {
    position: 'absolute',
    right: 0,
    bottom: 6,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    marginBottom: 4,
  },
  profession: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 18,
  },
});
