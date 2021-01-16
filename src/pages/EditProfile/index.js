import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.inputs} showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <Profile isEdit />
        <Gap height={26} />
        <Input title="Full Name" />
        <Gap height={24} />
        <Input title="Pekerjaan" />
        <Gap height={24} />
        <Input title="Email" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={40} />
        <Button onPress={() => navigation.goBack('UserProfile')}>
          Save Profile
        </Button>
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
