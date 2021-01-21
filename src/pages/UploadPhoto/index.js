import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {UserPhotoNull, ICAddPhoto, ICRemovePhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts, getData, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [photoDB, setPhotoDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(UserPhotoNull);

  const choosePhoto = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        const source = {uri: response.uri};
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Anda tidak memilih foto',
            type: 'danger',
          });
        } else {
          const PhotoForDB = `data:${response.type};base64, ${response.data}`;
          setPhotoDB(PhotoForDB);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const removePhoto = () => {
    setPhoto(UserPhotoNull);
    setHasPhoto(false);
  };

  const uploadAndContinue = () => {
    Firebase.database().ref(`users/${uid}/`).update({photo: photoDB});
    const data = route.params;
    data.photo = photoDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.main}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profileWrapper}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={choosePhoto}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto ? (
              <ICAddPhoto style={styles.addPhoto} />
            ) : (
              <ICRemovePhoto style={styles.addPhoto} onPress={removePhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button onPress={uploadAndContinue} disable={!hasPhoto}>
            Upload and Continue
          </Button>
          <Gap height={30} />
          <Link
            title="Skip for this"
            isCenter
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
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
    borderRadius: 110 / 2,
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
