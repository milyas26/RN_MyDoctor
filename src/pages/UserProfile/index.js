import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
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

  const signout = () => {
    Firebase.auth()
      .signOut()
      .then((res) => {
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={14} />
      {profile.fullName.length > 0 && (
        <Profile
          photo={profile.photo}
          name={profile.fullName}
          desc={profile.profession}
        />
      )}
      <List
        name="Update Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Logout"
        desc="Read our guidelines"
        type="next"
        icon="help"
        onPress={signout}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
