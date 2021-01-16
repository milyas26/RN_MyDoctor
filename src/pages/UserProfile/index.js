import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={14} />
      <Profile name="Sayna Melinda" desc="Graphic Designer" />
      <List
        name="Update Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Update Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Update Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Update Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="help"
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
