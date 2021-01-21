import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker/lib/commonjs';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });

  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const updateProfile = () => {
    const data = profile;
    data.photo = photoDB;

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password minimal 6 karakter',
          type: 'danger',
        });
      } else {
        // Update Password
        updatePassword();
        updateProfileData();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Update Password
        user.updatePassword(password).catch((err) => {
          showMessage({
            message: err.message,
            type: 'danger',
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then((res) => {
        storeData('user', data);
        navigation.goBack('UserProfile');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  const [photoDB, setPhotoDB] = useState('');
  const [photo, setPhoto] = useState(photo);
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
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.inputs} showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <Profile isEdit photo={photo} onPress={choosePhoto} />
        <Gap height={26} />
        <Input
          title="Full Name"
          value={profile.fullName}
          onChangeText={(value) => changeText('fullName', value)}
        />
        <Gap height={24} />
        <Input
          title="Pekerjaan"
          value={profile.profession}
          onChangeText={(value) => changeText('profession', value)}
        />
        <Gap height={24} />
        <Input title="Email" value={profile.email} disable />
        <Gap height={24} />
        <Input
          title="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Gap height={40} />
        <Button onPress={updateProfile}>Save Profile</Button>
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputs: {
    paddingHorizontal: 30,
    paddingTop: 0,
  },
});
