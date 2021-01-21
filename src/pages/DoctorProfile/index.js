import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View>
        <Gap height={20} />
        <Profile
          photo={{uri: dataDoctor.data.photo}}
          name={dataDoctor.data.fullName}
          desc={dataDoctor.data.profession}
        />
        <Gap height={10} />
        <ProfileItem title="Alumnus" desc={dataDoctor.data.university} />
        <ProfileItem
          title="Tempat Praktik"
          desc={dataDoctor.data.hospital_address}
        />
        <ProfileItem title="No. STR" desc={dataDoctor.data.str_number} />
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate('Chatting', dataDoctor)}>
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
