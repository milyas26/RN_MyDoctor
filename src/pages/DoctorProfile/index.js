import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View>
        <Gap height={20} />
        <Profile name="Nairobi Putri Hazna" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem title="Alumnus" desc="Universitas Indonesia, 2020" />
        <ProfileItem title="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
        <ProfileItem title="No. STR" desc="0000116622081996" />
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate('Chatting')}>
            Start Consultation
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    padding: 40,
  },
});
